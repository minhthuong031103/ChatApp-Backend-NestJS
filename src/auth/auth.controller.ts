import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Routes, Services } from "src/utils/constants";

import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "src/user/user.service";
import { instanceToPlain } from "class-transformer";
import { UserLoginDto } from "./dtos/userLogin.dto";
import { LocalAuthGuard } from "./utils/Guard";
import { AuthService } from "./auth.service";

@Controller(Routes.AUTH) //import auth route
export class AuthController {
  constructor(
    //Inject cac service
    @Inject(Services.AUTH)
    private authService: AuthService,
    @Inject(Services.USER)
    private userService: UserService
  ) {} //inject authService

  @Post("/register")
  @UsePipes(ValidationPipe)
  registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(this.userService.createUser(createUserDto));
  }
  @Post("/login")
  @UseGuards(LocalAuthGuard)
  login() {
    console.log("ok");
  }
  @Get("/status")
  status() {}

  @Post("/logout")
  logout() {}
}
