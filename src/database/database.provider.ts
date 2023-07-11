import entities from "src/utils/typeorm";
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: process.env.MYSQL_DB_HOST,
        port: process.env.MYSQL_DB_PORT,
        username: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_DATABASE,
        entities: entities,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
