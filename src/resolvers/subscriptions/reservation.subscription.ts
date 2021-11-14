import {Resolver, Root, Subscription} from "type-graphql";
import {Reservate} from "../../entity/reservate.entity";

@Resolver()
export class ReservationSubscription {
  @Subscription({topics: "CREATE_RESERVATION"})
  newReservationSubscription(@Root() payload: Reservate): Reservate {
    return payload;
  }

  @Subscription({topics: "RETURN_RESERVATION"})
  returnReservationSubscription(@Root() payload: Reservate): Reservate {
    return payload;
  }

  @Subscription({topics: "CONFIRM_RESERVATION"})
  confirmReservationSubscription(@Root() payload: Reservate): Reservate {
    return payload;
  }
}
