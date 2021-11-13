import {Field, InputType} from "type-graphql";

@InputType()
export class ParkingInput {
  @Field()
  parking_name: string;

  @Field()
  longitude: number;

  @Field({nullable: true})
  latitude: number;
}
