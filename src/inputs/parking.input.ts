import {Field, InputType} from "type-graphql";

@InputType()
class Place {
  @Field()
  place_id: number;
}

@InputType()
export class ParkingInput {
  @Field()
  parking_name: string;

  @Field()
  longitude: number;

  @Field({nullable: true})
  latitude: number;

  @Field(() => Place, {nullable: true})
  place: Place;
}
