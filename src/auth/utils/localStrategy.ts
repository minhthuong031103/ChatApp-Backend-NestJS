import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Services } from "src/utils/constants";
import { IAuthServices } from "../auth";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthServices
  ) {
    //super({ usernameField: "email" }) if you want to use email instead of username
    super();
  }
  async validate(username: string, password: string) {
    return this.authService.validateUser({ username, password });
  }
}
