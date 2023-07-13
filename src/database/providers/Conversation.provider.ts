import { Inject } from "@nestjs/common";
import { Conversation } from "src/utils/typeorm";

import { DataSource } from "typeorm";

export const ConversationProvider = [
  {
    provide: "CONVERSATION_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Conversation),
    inject: ["DATA_SOURCE"],
  },
];
