import { Participant } from "src/utils/typeorm";

export interface IParticipantService {
  findParticipant(): Promise<Participant>;
  createParticipant(): Promise<Participant>;
}
