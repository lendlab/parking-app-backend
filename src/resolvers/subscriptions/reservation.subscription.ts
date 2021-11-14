import {Reservate} from "src/entity/reservate.entity";
import {Resolver, Root, Subscription} from "type-graphql";

@Resolver()
export class ReservationSubscription {
  @Subscription({topics: "CREATE_RESERVATION"})
  newReservationSubscription(@Root() payload: Reservate): Reservate {
    return payload;
  }
}
