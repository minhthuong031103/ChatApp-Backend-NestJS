import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Routes, Services } from "src/utils/constants";
import { IAuthServices } from "./auth";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "src/user/user.service";
import { instanceToPlain } from "class-transformer";

@Controller(Routes.AUTH) //import auth route
export class AuthController {
  constructor(
    //Inject cac service
    @Inject(Services.AUTH)
    private authService: IAuthServices,
    @Inject(Services.USER)
    private userService: UserService
  ) {} //inject authService

  @Post("/register")
  @UsePipes(ValidationPipe)
  registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(this.userService.createUser(createUserDto));
  }
  @Post("/login")
  login() {}
  @Get("/status")
  status() {}

  @Post("/logout")
  logout() {}
}
