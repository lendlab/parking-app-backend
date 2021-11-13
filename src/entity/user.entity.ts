import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Reservate} from "./reservate.entity";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  email: string;

  @Field()
  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Reservate, (reservate) => reservate.user)
  reservates: Promise<Reservate>;
}
