import { Inject, Injectable } from "@nestjs/common";
import { IAuthServices } from "./auth";
import { Services } from "src/utils/constants";
import { UserService } from "src/user/user.service";

@Injectable() //Injectable decorator
export class AuthService implements IAuthServices {
  constructor(
    @Inject(Services.USER) //inject user service
    private userService: UserService
  ) {}
  validateUser() {
    {
    }
  }
} //implement IAuthServices
