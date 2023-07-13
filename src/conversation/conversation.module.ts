import { Module } from "@nestjs/common";
import { ConversationService } from "./conversation.service";
import { ConversationController } from "./conversation.controller";
import { Services } from "src/utils/constants";
import { ConversationProvider } from "src/database/providers/Conversation.provider";
import { ParticipantProvider } from "src/database/providers/Participant.provider";
import { DatabaseModule } from "src/database/database.module";
import { ParticipantModule } from "src/participant/participant.module";

@Module({
  imports: [DatabaseModule, ParticipantModule],
  controllers: [ConversationController],
  providers: [
    ...ConversationProvider,
    ...ParticipantProvider,
    { provide: Services.CONVERSATION, useClass: ConversationService },
  ],
})
export class ConversationModule {}
