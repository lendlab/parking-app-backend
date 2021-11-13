import {buildSchema, NonEmptyArray} from "type-graphql";
import {ParkingMutation} from "./mutations/parking.mutation";
import {PlaceMutations} from "./mutations/place.mutation";
import {ReservationMutation} from "./mutations/reservation.mutation";
import {UserMutation} from "./mutations/user.mutation";
import {HelloResolver} from "./querys/hello";
import {ParkingQuerys} from "./querys/parking.query";
import {PlaceQuerys} from "./querys/place.query";
import {UserQuery} from "./querys/user.query";

const resolvers = [
  HelloResolver,
  UserQuery,
  PlaceQuerys,
  ParkingQuerys,
  //mutation
  UserMutation,
  ParkingMutation,
  PlaceMutations,
  ReservationMutation,
] as const;

export const shcemaIndex = buildSchema({
  resolvers: resolvers as NonEmptyArray<Function>,
  validate: true,
});
