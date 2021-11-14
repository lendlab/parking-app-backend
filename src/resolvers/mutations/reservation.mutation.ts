import {Arg, Int, Mutation, PubSub, PubSubEngine, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {Place} from "../../entity/place.entity";
import {Reservates} from "../../inputs/place.input";

import {
  CreateReservationResponse,
  ReservateResponse,
} from "../../errors/reservate.response";

import {ReservationInput} from "../../inputs/reservate.input";
import {Reservate} from "../../entity/reservate.entity";
import {genToken} from "../../utils/genToken";
import {Have} from "../../entity/have.entity";

@Resolver()
export class ReservationMutation {
  @Mutation(() => CreateReservationResponse, {nullable: true})
  async createReservation(
    @Arg("options", () => ReservationInput) options: ReservationInput,
    @PubSub() pubsub: PubSubEngine
  ): Promise<CreateReservationResponse> {
    const token = options.reservation_token + genToken(10);

    await Reservate.create({
      reservation_token: token,
      reservation_starts: options.reservation_starts,
      reservation_end: options.reservation_end,
      place: options.place,
      user: options.user,
    }).save();

    const reservate = await getRepository(Reservate)
      .createQueryBuilder("r")
      .innerJoinAndSelect("r.user", "user")
      .innerJoinAndSelect("r.place", "place")
      .where(`place.place_id = ${options.place.place_id}`)
      .getOne();

    await Place.update(options.place.place_id, {
      state: (options.place.state = "Solicitado"),
    });

    pubsub.publish("CREATE_RESERVATION", reservate);

    switch (reservate?.place.state) {
      case "Solicitado":
        return {
          errors: [
            {
              path: "place.state",
              message: "Lugar solicitado con exito",
            },
          ],
          reservate,
        };
      case "Ocupado":
        return {
          errors: [
            {
              path: "place.state",
              message: "Lugar ocupado",
            },
          ],
        };
      case "Libre":
        return {
          errors: [
            {
              path: "place.state",
              message: "Lugar Libre",
            },
          ],
          reservate,
        };
      default:
        return {reservate};
    }
  }

  @Mutation(() => ReservateResponse, {nullable: true})
  async confirmReservation(
    @Arg("place_id", () => Int) place_id: number,
    @Arg("options", () => Reservates) options: Reservates,
    @PubSub() pubsub: PubSubEngine
  ): Promise<ReservateResponse> {
    const have = await getRepository(Have)
      .createQueryBuilder("have")
      .innerJoinAndSelect("have.place", "place")
      .innerJoinAndSelect("have.parking", "parking")
      .where(`place.place_id = ${place_id}`)
      .getOne();

    if (options.state === "Solicitado") {
      await Place.update(place_id, {
        state: (options.state = "Ocupado"),
        occuped: (options.occuped = true),
      });
    }

    pubsub.publish("CONFIRM_RESERVATION", have);

    return {have};
  }

  @Mutation(() => ReservateResponse, {nullable: true})
  async returnReservation(
    @Arg("place_id", () => Int) place_id: number,
    @Arg("options", () => Reservates) options: Reservates,
    @PubSub() pubsub: PubSubEngine
  ): Promise<ReservateResponse> {
    const have = await getRepository(Have)
      .createQueryBuilder("have")
      .innerJoinAndSelect("have.place", "place")
      .innerJoinAndSelect("have.parking", "parking")
      .where(`place.place_id = ${place_id}`)
      .getOne();

    if (options.state === "Ocupado") {
      await Place.update(place_id, {
        state: (options.state = "Libre"),
        occuped: (options.occuped = false),
      });
    }

    pubsub.publish("RETURN_RESERVATION", have);

    return {have};
  }
}
