import { User } from "src/utils/typeorm";
import { DataSource } from "typeorm";

export const userProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ["DATA_SOURCE"],
  },
];
