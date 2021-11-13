import {Field, InputType} from "type-graphql";

@InputType()
class Place_Id {
  @Field()
  place_id: number;
}

@InputType()
class User_Ci {
  @Field()
  cedula: number;
}

@InputType()
export class ReservationInput {
  @Field()
  reservation_token: string;

  @Field(() => Date)
  reservation_starts: Date;

  @Field(() => Date, {nullable: true})
  reservation_end: Date;

  @Field(() => User_Ci)
  user: User_Ci;

  @Field(() => Place_Id)
  place: Place_Id;
}
