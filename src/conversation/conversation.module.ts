import { Module } from "@nestjs/common";
import { ConversationService } from "./conversation.service";
import { ConversationController } from "./conversation.controller";
import { Services } from "src/utils/constants";

@Module({
  controllers: [ConversationController],
  providers: [
    { provide: Services.CONVERSATION, useClass: ConversationService },
  ],
})
export class ConversationModule {}
