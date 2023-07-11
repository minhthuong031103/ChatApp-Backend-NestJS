import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { Routes, Services } from "src/utils/constants";
import { IConversationService } from "./conversation";
import { AuthenticatedGuard } from "src/auth/utils/Guard";
import { create } from "domain";
import { CreateConversationDto } from "./dtos/CreateConversationDto";

@Controller(Routes.CONVERSATION)
export class ConversationController {
  constructor(
    @Inject(Services.CONVERSATION)
    private readonly conversationService: IConversationService
  ) {}
  @Post()
  @UseGuards(AuthenticatedGuard)
  createConversation(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationService.createConversation(
      {
        email: "cc",
        password: "cc",
        username: "cc",
        firstName: "cc",
        lastName: "cc",
        id: 1,
      },
      createConversationDto
    );
  }
}
