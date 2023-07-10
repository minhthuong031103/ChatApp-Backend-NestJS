import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import entities from "./utils/typeorm";
import { PassportModule } from "@nestjs/passport";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env", //config env path
    }),
    PassportModule.register({ session: true }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQL_DB_HOST,
      port: process.env.MYSQL_DB_PORT,
      username: process.env.MYSQL_DB_USERNAME,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_DATABASE,
      entities: entities,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
