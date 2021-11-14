import {Arg, Int, Mutation, Resolver} from "type-graphql";

import {PlaceResponse} from "../../errors/place.response";
import {PlaceInput, UpdatePlaceInput} from "../../inputs/place.input";
import {Place} from "../../entity/place.entity";
import {Have} from "../../entity/have.entity";
import {HaveInput} from "../../inputs/have.input";
import {getRepository} from "typeorm";

@Resolver()
export class PlaceMutations {
  @Mutation(() => PlaceResponse, {nullable: true})
  async createPlace(
    @Arg("options", () => PlaceInput) options: PlaceInput
  ): Promise<PlaceResponse> {
    const place = await Place.create({...options}).save();

    return {place};
  }

  @Mutation(() => Place)
  async updatePlace(
    @Arg("place_id", () => Int) place_id: number,
    @Arg("options", () => UpdatePlaceInput) options: UpdatePlaceInput
  ) {
    await Place.update({place_id}, options);

    const updatedPlace = getRepository(Place)
      .createQueryBuilder("place")
      .where(`place.place_id = ${place_id}`)
      .getOne();

    return updatedPlace;
  }

  @Mutation(() => Have, {nullable: true})
  async addPlaceToParking(@Arg("options", () => HaveInput) options: HaveInput) {
    const parking = await Have.create({
      ...options,
    }).save();
    return parking;
  }
}
