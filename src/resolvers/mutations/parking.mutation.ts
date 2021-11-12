import {Arg, Mutation, Resolver} from "type-graphql";

import {Parking} from "../../entity/parking.entity";
import {ParkingResponse} from "../../errors/parking.response";
import {ParkingInput} from "../../inputs/parking.input";
@Resolver()
export class ParkingMutation {
  @Mutation(() => ParkingResponse, {nullable: true})
  async createParking(
    @Arg("options", () => ParkingInput) optinons: ParkingInput
  ): Promise<ParkingResponse> {
    const parking = await Parking.create({...optinons}).save();

    return {parking};
  }
}
