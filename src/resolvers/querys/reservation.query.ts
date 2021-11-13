import {Ctx, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";
import {Reservate} from "../../entity/reservate.entity";
import {MyContext} from "../../types/MyContext";

@Resolver()
export class ReservationQuerys {
  @Query(() => [Reservate], {nullable: true})
  async getReservations() {
    const reservations = await getRepository(Reservate)
      .createQueryBuilder("reservate")
      .innerJoinAndSelect("reservate.user", "user")
      .innerJoinAndSelect("reservate.place", "place")
      .getMany();

    return reservations;
  }

  @Query(() => [Reservate], {nullable: true})
  async getMyReservations(@Ctx() {req}: MyContext) {
    const email = req.session.email;

    const reservations = await getRepository(Reservate)
      .createQueryBuilder("reservate")
      .innerJoinAndSelect("reservate.user", "user")
      .innerJoinAndSelect("reservate.place", "place")
      .where(`user.email = '${email}' `)
      .getMany();

    return reservations;
  }
}
