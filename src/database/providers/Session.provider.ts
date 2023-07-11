import { Session } from "src/utils/typeorm";
import { DataSource } from "typeorm";

export const sessionProviders = [
  {
    provide: "SESSION_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Session),
    inject: ["DATA_SOURCE"],
  },
];
