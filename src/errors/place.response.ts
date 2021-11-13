import {Place} from "../entity/place.entity";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
class PlaceErrors {
  @Field()
  path: string;

  @Field()
  message: string;
}

@ObjectType()
export class PlaceResponse {
  @Field(() => [PlaceErrors], {nullable: true})
  errors?: PlaceErrors[];

  @Field(() => Place, {nullable: true})
  place?: Place;
}
