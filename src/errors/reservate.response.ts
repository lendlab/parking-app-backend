import {Field, ObjectType} from "type-graphql";

import {Place} from "../entity/place.entity";

@ObjectType()
class ReservateErrors {
  @Field()
  path: string;

  @Field()
  message: string;
}

@ObjectType()
export class ReservateResponse {
  @Field(() => [ReservateErrors], {nullable: true})
  errors?: ReservateErrors[];

  @Field(() => Place, {nullable: true})
  place?: Place;
}
