import { Inject, Injectable } from "@nestjs/common";
import { IParticipantService } from "./participant";
import { Repository } from "typeorm";
import { Participant } from "src/utils/typeorm";

@Injectable()
export class ParticipantService implements IParticipantService {
  constructor(
    @Inject("PARTICIPANT_REPOSITORY")
    private readonly participantRepository: Repository<Participant>
  ) {}

  async findParticipant(): Promise<Participant> {
    return null;
  }
  async createParticipant(): Promise<Participant> {
    return null;
  }
}
