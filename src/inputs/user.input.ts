import {Field, InputType} from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  cedula: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  cedula: number;

  @Field()
  password: string;
}
