import {Field, InputType} from "type-graphql";

@InputType()
export class ParkingInput {
  @Field()
  parking_name: string;

  @Field()
  longitude: number;

  @Field()
  image: string;

  @Field()
  minutes: number;

  @Field({nullable: true})
  latitude: number;
}
