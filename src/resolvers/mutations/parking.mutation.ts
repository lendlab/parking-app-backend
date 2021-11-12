import {Parking} from "src/entity/parking.entity";
import {ParkingResponse} from "src/errors/parking.response";
import {Arg, Mutation, Resolver} from "type-graphql";

@Resolver()
export class ParkingMutation {
  @Mutation(() => ParkingResponse, {nullable: true})
  async createParking(
    @Arg("options", () => ParkingInput) optinons: ParkingInput
  ): Promise<ParkingResponse> {
    const parking = Parking.create({...options}).save();

    return {parking};
  }
}
