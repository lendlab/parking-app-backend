import {buildSchema, NonEmptyArray} from "type-graphql";
import {UserMutation} from "./mutations/user.mutation";
import {HelloResolver} from "./querys/hello";

const resolvers = [HelloResolver, UserMutation] as const;

export const shcemaIndex = buildSchema({
  resolvers: resolvers as NonEmptyArray<Function>,
});
