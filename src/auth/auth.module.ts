import { Module } from "@nestjs/common";
import { AuthController } from "../auth/auth.controller";
import { AuthService } from "./auth.service";
import { Services } from "src/utils/constants";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./utils/localStrategy";
import { SessionSerializer } from "./utils/SessionSerializer";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
