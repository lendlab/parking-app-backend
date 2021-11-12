import {Ctx, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {MyContext} from "../../types/MyContext";
import {User} from "../../entity/user.entity";

@Resolver()
export class UserQuery {
  @Query(() => User, {nullable: true})
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.cedula) {
      return null;
    }

    const user = getRepository(User)
      .createQueryBuilder("user")
      .where(`user.cedula = ${req.session.cedula}`)
      .getOne();

    return user;
  }
}
