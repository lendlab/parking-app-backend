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
  @CreateDateColumn()
  reservation_starts: Date;

  @Field(() => Date)
  @CreateDateColumn({nullable: true})
  reservation_end: Date;

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User, (user) => user.reservates, {onDelete: "CASCADE"})
  user: User;

  @Field(() => Place, {nullable: true})
  @ManyToOne(() => Place, (place) => place.reservate, {
    onDelete: "CASCADE",
  })
  place: Place;
}
