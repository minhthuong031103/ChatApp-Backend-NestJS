import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
import { Services } from "src/utils/constants";
import { User } from "src/utils/typeorm";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USER) private readonly userService: UserService
  ) {
    super();
  }
  serializeUser(user: User, done: Function) {
    done(null, user);
  }
  async deserializeUser(user: User, done: Function) {
    const userDB = this.userService.findUser(
      { id: user.id },
      { selectAll: true }
    );
    return userDB ? done(null, userDB) : done(null, null);
  }
}
