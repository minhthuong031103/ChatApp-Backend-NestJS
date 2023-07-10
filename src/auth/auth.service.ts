import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IAuthServices } from "./auth";
import { Services } from "src/utils/constants";
import { UserService } from "src/user/user.service";
import { ValidateUserDetails } from "src/utils/types";
import { compareHash } from "src/utils/typeorm/helper";

@Injectable() //Injectable decorator
export class AuthService implements IAuthServices {
  constructor(
    @Inject(Services.USER) //inject user service
    private userService: UserService
  ) {}
  async validateUser(userDetails: ValidateUserDetails) {
    {
      const user = await this.userService.findUser(
        { username: userDetails.username },
        { selectAll: true }
      );
      console.log(user);
      if (!user)
        throw new HttpException("Invalid Credentials", HttpStatus.UNAUTHORIZED);
      const isPasswordValid = await compareHash(
        userDetails.password,
        user.password
      );
      console.log(isPasswordValid);
      return isPasswordValid ? user : null;
    }
  }
} //implement IAuthServices
