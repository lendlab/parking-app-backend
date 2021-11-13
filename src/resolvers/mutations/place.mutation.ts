import {Arg, Mutation, Resolver} from "type-graphql";

import {PlaceResponse} from "../../errors/place.response";
import {PlaceInput} from "../../inputs/place.input";
import {Place} from "../../entity/place.entity";
import {getRepository} from "typeorm";

@Resolver()
export class PlaceMutations {
  @Mutation(() => PlaceResponse, {nullable: true})
  async createPlace(
    @Arg("options", () => PlaceInput) options: PlaceInput
  ): Promise<PlaceResponse> {
    await Place.create({...options}).save();

    const place = await getRepository(Place)
      .createQueryBuilder("place")
      .innerJoinAndSelect("place.parking", "parking")
      .where(`parking.parking_id = ${options.parking.parking_id}`)
      .getOne();

    return {place};
  }
}
