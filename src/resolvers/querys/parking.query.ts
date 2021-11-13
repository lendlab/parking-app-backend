import {Arg, Int, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";
import {Parking} from "../../entity/parking.entity";
import {Have} from "../../entity/have.entity";

@Resolver()
export class ParkingQuerys {
  @Query(() => [Parking], {nullable: true})
  async getParkings() {
    const parking = await getRepository(Parking)
      .createQueryBuilder("parking")
      .getMany();

    return parking;
  }

  @Query(() => [Have], {nullable: true})
  async getParkingsPlace(@Arg("parking_id", () => Int) parking_id: number) {
    return await getRepository(Have)
      .createQueryBuilder("have")
      .innerJoinAndSelect("have.parking", "parking")
      .innerJoinAndSelect("have.place", "place")
      .where(`parking.parking_id = ${parking_id}`)
      .getMany();
  }

  @Query(() => [Have], {nullable: true})
  async getAvaliblePlaceList2() {
    const places = await getRepository(Have)
      .createQueryBuilder("have")
      .innerJoinAndSelect("have.parking", "parking")
      .innerJoinAndSelect("have.place", "place")
      .where("place.occuped = false")
      .getMany();

    return places;
  }

  @Query(() => [Have], {nullable: true})
  async getOcuppedPlaceList() {
    const places = await getRepository(Have)
      .createQueryBuilder("have")
      .innerJoinAndSelect("have.parking", "parking")
      .innerJoinAndSelect("have.place", "place")
      .where("place.occuped = true")
      .getMany();

    return places;
  }
}
