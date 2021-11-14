import {Field, InputType} from "type-graphql";

//@InputType()
//class Parking_ID {
//  @Field()
//  parking_id: number;
//}

@InputType()
export class PlaceInput {
  @Field(() => Boolean)
  occuped: Boolean;

  @Field()
  state: string;

  @Field()
  place_number: number;
}

@InputType()
export class UpdatePlaceInput {
  @Field(() => Boolean, {nullable: true})
  occuped: Boolean;

  @Field({nullable: true})
  state: string;

  @Field({nullable: true})
  place_number: number;
}

@InputType()
export class Reservates {
  @Field(() => Boolean, {nullable: true})
  occuped: Boolean;

  @Field({nullable: true})
  state: string;
}
