import {Arg, Int, Mutation, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {Place} from "../../entity/place.entity";
import {Reservates} from "../../inputs/place.input";
import {ReservateResponse} from "../../errors/reservate.response";
import {ReservationInput} from "../../inputs/reservate.input";
import {Reservate} from "../../entity/reservate.entity";
import {genToken} from "../../utils/genToken";

@Resolver()
export class ReservationMutation {
  @Mutation(() => Reservate, {nullable: true})
  async createReservation(
    @Arg("options", () => ReservationInput) options: ReservationInput
  ) {
    const token = options.reservation_token + genToken(10);

    const reservation = await Reservate.create({
      reservation_token: token,
      reservation_starts: options.reservation_starts,
      reservation_end: options.reservation_end,
      place: options.place,
      user: options.user,
    }).save();

    return reservation;
  }

  @Mutation(() => ReservateResponse, {nullable: true})
  async confirmReservation(
    @Arg("place_id", () => Int) place_id: number,
    @Arg("options", () => Reservates) options: Reservates
  ): Promise<ReservateResponse> {
    const place = await getRepository(Place)
      .createQueryBuilder("place")
      .innerJoinAndSelect("place.parking", "parking")
      .where(`place.place_id = ${place_id}`)
      .getOne();

    if (options.occuped === true) {
      await Place.update({place_id}, options);
    } else {
      console.log("ocurrio un error");
    }
    return {place};
  }
}
