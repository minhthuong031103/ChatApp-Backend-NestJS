import { Participant } from "src/utils/typeorm/entities/Participant";
import { DataSource } from "typeorm";

export const ParticipantProvider = [
  {
    provide: "PARTICIPANT_REPOSITORY",
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Participant),
    inject: ["DATA_SOURCE"],
  },
];
