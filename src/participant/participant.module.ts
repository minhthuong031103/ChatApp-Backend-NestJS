import { Module } from "@nestjs/common";
import { ParticipantController } from "./participant.controller";
import { ParticipantService } from "./participant.service";
import { DatabaseModule } from "src/database/database.module";
import { ParticipantProvider } from "src/database/providers/Participant.provider";
import { Services } from "src/utils/constants";

@Module({
  imports: [DatabaseModule],
  controllers: [ParticipantController],

  providers: [
    { provide: Services.PARTICIPANT, useClass: ParticipantService },
    ...ParticipantProvider,
  ],
  exports: [{ provide: Services.PARTICIPANT, useClass: ParticipantService }],
})
export class ParticipantModule {}
