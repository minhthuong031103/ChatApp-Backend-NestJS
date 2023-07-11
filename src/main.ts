import "reflect-metadata";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as session from "express-session";
import * as passport from "passport";
import { DataSource } from "typeorm";
import { TypeormStore } from "connect-typeorm";
import { Session } from "./utils/typeorm";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource: DataSource = app.get<DataSource>("DATA_SOURCE");
  const sessionRepository = dataSource.getRepository(Session);
  console.log(sessionRepository);
  const { PORT, COOKIE_SECRET } = process.env; //PORT 3001 env
  app.setGlobalPrefix("api"); //set global prefix (api)
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: COOKIE_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 86400000,
      },
      store: new TypeormStore().connect(sessionRepository),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  try {
    await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap(); //run app
