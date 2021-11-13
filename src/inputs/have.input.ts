import {Field, InputType} from "type-graphql";

@InputType()
class Parking_id {
  @Field()
  parking_id: number;
}

@InputType()
class Place_id {
  @Field()
  place_id: number;
}

@InputType()
export class HaveInput {
  @Field(() => Parking_id)
  parking: Parking_id;

  @Field(() => Place_id)
  place: Place_id;
}
