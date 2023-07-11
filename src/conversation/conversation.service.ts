import { Injectable } from "@nestjs/common";
import { IConversationService } from "./conversation";

@Injectable()
export class ConversationService implements IConversationService {
  async createConversation(): Promise<any> {
    return 1;
  }
}
