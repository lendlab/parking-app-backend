import {Place} from "../../entity/place.entity";
import {Arg, Int, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

@Resolver()
export class PlaceQuerys {
  @Query(() => [Place], {nullable: true})
  async getPlaceByParkingId(@Arg("parking_id", () => Int) parking_id: number) {
    return await getRepository(Place)
      .createQueryBuilder("place")
      .innerJoinAndSelect("place.parking", "parking")
      .where(`parking.parking_id = ${parking_id}`)
      .getMany();
  }
}
