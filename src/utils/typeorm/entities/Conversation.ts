import { Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participant } from "./Participant";

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Participant, (participant) => participant.conversations)
  participants: Participant[];
}
