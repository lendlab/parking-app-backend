import {Arg, Mutation, Resolver} from "type-graphql";

import {PlaceResponse} from "../../errors/place.response";
import {PlaceInput} from "../../inputs/place.input";
import {Place} from "../../entity/place.entity";
import {Have} from "../../entity/have.entity";
import {HaveInput} from "../../inputs/have.input";

@Resolver()
export class PlaceMutations {
  @Mutation(() => PlaceResponse, {nullable: true})
  async createPlace(
    @Arg("options", () => PlaceInput) options: PlaceInput
  ): Promise<PlaceResponse> {
    const place = await Place.create({...options}).save();

    return {place};
  }

  @Mutation(() => Have, {nullable: true})
  async addPlaceToParking(@Arg("options", () => HaveInput) options: HaveInput) {
    const parking = await Have.create({
      ...options,
    }).save();
    return parking;
  }
}
