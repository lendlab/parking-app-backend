import {Parking} from "src/entity/parking.entity";
import {Field, ObjectType} from "type-graphql";

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
  parking: Parking;
}
