import {Field, ObjectType} from "type-graphql";

import {Reservate} from "../entity/reservate.entity";
import {Have} from "../entity/have.entity";

@ObjectType()
class ReservateErrors {
  @Field()
  path: string;

  @Field()
  message: string;
}

@ObjectType()
class CreateErrors {
  @Field()
  path: string;

  @Field()
  message: string;
}

@ObjectType()
export class ReservateResponse {
  @Field(() => [ReservateErrors], {nullable: true})
  errors?: ReservateErrors[];

  @Field(() => Have, {nullable: true})
  have?: Have;
}

@ObjectType()
export class CreateReservationResponse {
  @Field(() => [CreateErrors], {nullable: true})
  errors?: CreateErrors[];

  @Field(() => Reservate, {nullable: true})
  reservate?: Reservate;
}
