import {Field, InputType} from "type-graphql";

@InputType()
class Parking_ID {
  @Field()
  parking_id: number;
}

@InputType()
export class PlaceInput {
  @Field(() => Boolean)
  occuped: Boolean;

  @Field()
  place_number: number;
}

@InputType()
export class Reservates {
  @Field(() => Boolean)
  occuped: Boolean;

  @Field(() => Parking_ID, {nullable: true})
  parking: Parking_ID;
}
