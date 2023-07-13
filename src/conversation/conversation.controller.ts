import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { Routes, Services } from "src/utils/constants";
import { IConversationService } from "./conversation";
import { AuthenticatedGuard } from "src/auth/utils/Guard";
import { create } from "domain";
import { CreateConversationDto } from "./dtos/CreateConversationDto";
import { AuthUser } from "src/utils/decorators";
import { User } from "src/utils/typeorm";

@Controller(Routes.CONVERSATION)
export class ConversationController {
  constructor(
    @Inject(Services.CONVERSATION)
    private readonly conversationService: IConversationService
  ) {}
  @Post()
  @UseGuards(AuthenticatedGuard)
  createConversation(
    @Body() createConversationDto: CreateConversationDto,
    @AuthUser() user: User
  ) {
    console.log(user);
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
