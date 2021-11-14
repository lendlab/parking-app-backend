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
    let reservate;

    reservate = await getRepository(Reservate)
      .createQueryBuilder("r")
      .innerJoinAndSelect("r.user", "user")
      .innerJoinAndSelect("r.place", "place")
      .where(`place.place_id = ${options.place.place_id}`)
      .getOne();

    console.log(reservate);

    if (reservate) {
      if (reservate.place.state === "Ocupado") {
        return {
          errors: [
            {
              path: "reserva",
              message: "Lugar actualmente ocupado.",
            },
          ],
        };
      }
      return {
        errors: [
          {
            path: "reserva",
            message: "ya existe una reserva en curso para esta plaza.",
          },
        ],
      };
    }

    const token = options.reservation_token + genToken(10);

    const result = await Reservate.create({
      reservation_token: token,
      reservation_starts: options.reservation_starts,
      reservation_end: options.reservation_end,
      place: options.place,
      user: options.user,
    }).save();

    await Place.update(options.place.place_id, {
      state: (options.place.state = "Solicitado"),
    });

    reservate = await getRepository(Reservate)
      .createQueryBuilder("r")
      .innerJoinAndSelect("r.user", "user")
      .innerJoinAndSelect("r.place", "place")
      .where(`place.place_id = ${options.place.place_id}`)
      .getOne();

    pubsub.publish("CREATE_RESERVATION", result);

    return {reservate};
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

    const reservation = await getRepository(Reservate)
      .createQueryBuilder("reservate")
      .innerJoinAndSelect("reservate.place", "place")
      .where(`placePlaceId = ${place_id}`)
      .getOne();

    const reservation_id = reservation?.reservation_id;

    if (options.state === "Ocupado") {
      await Place.update(place_id, {
        state: (options.state = "Libre"),
        occuped: (options.occuped = false),
      });

      await Reservate.delete({reservation_id});
    }

    pubsub.publish("RETURN_RESERVATION", have);

    return {have};
  }

  @Mutation(() => Boolean, {nullable: true})
  async deleteReservation(
    @Arg("reservation_id", () => Int) reservation_id: number
  ) {
    const reservation = await Reservate.delete({reservation_id});
    if (!reservation) {
      return null;
    }
    return true;
  }
}
