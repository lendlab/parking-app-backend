import {Field, InputType} from "type-graphql";

@InputType()
class Parking_ID {
  @Field()
  parking_id: number;
}

@InputType()
export class PlaceInput {
  @Field()
  occuped: true;

  @Field(() => Parking_ID)
  parking: Parking_ID;
}

@InputType()
export class Reservates {
  @Field(() => Boolean)
  occuped: Boolean;

  @Field(() => Parking_ID, {nullable: true})
  parking: Parking_ID;
}
