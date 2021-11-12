import {buildSchema, NonEmptyArray} from "type-graphql";
import {UserMutation} from "./mutations/user.mutation";
import {HelloResolver} from "./querys/hello";
import {UserQuery} from "./querys/user.query";

const resolvers = [HelloResolver, UserMutation, UserQuery] as const;

export const shcemaIndex = buildSchema({
  resolvers: resolvers as NonEmptyArray<Function>,
  validate: true,
});
