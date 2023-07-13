import { Inject, Injectable } from "@nestjs/common";
import { IConversationService } from "./conversation";
import { CreateConversationParams } from "src/utils/types";
import { User } from "src/utils/typeorm/entities/User";
import { Repository } from "typeorm";
import { Conversation, Participant } from "src/utils/typeorm";
import { Services } from "src/utils/constants";
import { IParticipantService } from "src/participant/participant";

@Injectable()
export class ConversationService implements IConversationService {
  constructor(
    @Inject("CONVERSATION_REPOSITORY")
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(Services.PARTICIPANT)
    private readonly participantService: IParticipantService
  ) {}
  async createConversation(
    user: User,
    createConversationParams: CreateConversationParams
  ): Promise<any> {
    return 1;
  }
}
