import {Field, ObjectType} from "type-graphql";
import {Have} from "../entity/have.entity";

//import {Place} from "../entity/place.entity";

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

  @Field(() => Have, {nullable: true})
  have?: Have;
}
