import {Ctx, Query, Resolver} from "type-graphql";
import {getRepository} from "typeorm";

import {MyContext} from "../../types/MyContext";
import {User} from "../../entity/user.entity";

@Resolver()
export class UserQuery {
  @Query(() => [User], {nullable: true})
  async getUsers() {
    return User.find();
  }

  @Query(() => User, {nullable: true})
  async me(@Ctx() {req}: MyContext) {
    if (!req.session.email) {
      return null;
    }

    const user = getRepository(User)
      .createQueryBuilder("user")
      .where(`user.email = '${req.session.email}'`)
      .getOne();

    return user;
  }
}
