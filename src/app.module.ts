import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import entities from "./utils/typeorm";
import { PassportModule } from "@nestjs/passport";
import { DatabaseModule } from "./database/database.module";
import { ConversationModule } from './conversation/conversation.module';
import { ParticipantModule } from './participant/participant.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env", //config env path
    }),
    PassportModule.register({ session: true }),
    AuthModule,
    UserModule,
    ConversationModule,
    ParticipantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
