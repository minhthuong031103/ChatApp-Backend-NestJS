import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Services } from "src/utils/constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/utils/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [{ provide: Services.USER, useClass: UserService }],
  exports: [{ provide: Services.USER, useClass: UserService }],
})
export class UserModule {}
