import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import {Place} from "./place.entity";
import {User} from "./user.entity";

@ObjectType()
@Entity()
export class Reservate extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  reservation_id: number;

  @Field()
  @PrimaryColumn()
  reservation_token: string;

  @Field(() => Date)
  @CreateDateColumn({type: "timestamp"})
  reservation_starts: Date;

  @Field(() => Date, {nullable: true})
  @CreateDateColumn({type: "timestamp", nullable: true})
  reservation_end: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.reservates, {onDelete: "CASCADE"})
  user: User;

  @Field(() => Place)
  @ManyToOne(() => Place, (place) => place.reservate, {
    primary: true,
    onDelete: "CASCADE",
  })
  place: Place;
}
