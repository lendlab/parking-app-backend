import {Place} from "../../entity/place.entity";
import {Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

@Resolver()
export class PlaceQuerys {
  @Query(() => [Place], {nullable: true})
  async getPlacesList() {
    const places = await Place.find();

    return places;
  }

  @Query(() => [Place], {nullable: true})
  async getAvaliblePlaceList() {
    const places = await getRepository(Place)
      .createQueryBuilder("place")
      .where("place.occuped = false")
      .getMany();

    return places;
  }
}
