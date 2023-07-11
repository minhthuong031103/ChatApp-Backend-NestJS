import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Services } from "src/utils/constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/utils/typeorm";
import { userProviders } from "src/database/providers/User.provider";
import { DatabaseModule } from "src/database/database.module";
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    { provide: Services.USER, useClass: UserService },
  ],
  exports: [{ provide: Services.USER, useClass: UserService }],
})
export class UserModule {}
