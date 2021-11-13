import {Field, ObjectType} from "type-graphql";

import {Parking} from "../entity/parking.entity";

@ObjectType()
class ParkingErrors {
  @Field()
  path: string;

  @Field()
  message: string;
}

@ObjectType()
export class ParkingResponse {
  @Field(() => [ParkingErrors], {nullable: true})
  errors?: ParkingErrors[];

  @Field(() => Parking, {nullable: true})
  parking?: Parking;
}
