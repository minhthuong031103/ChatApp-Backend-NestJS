import { ISession } from "connect-typeorm";
import { Column, DeleteDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "session" })
export class Session implements ISession {
  @Column("bigint")
  expiredAt: number;

  @PrimaryColumn("varchar", { length: 255 })
  id: string;

  @Column("text")
  json: string;

  @DeleteDateColumn()
  destroyedAt?: Date;
}
