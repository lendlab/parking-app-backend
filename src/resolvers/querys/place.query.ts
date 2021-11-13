import {Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {Have} from "../../entity/have.entity";
import {Place} from "../../entity/place.entity";

@Resolver()
export class PlaceQuerys {
  @Query(() => [Place], {nullable: true})
  async getPlacesList() {
    const places = await Place.find();

    return places;
  }

  @Query(() => [Have], {nullable: true})
  async getAvaliblePlaceList() {
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
