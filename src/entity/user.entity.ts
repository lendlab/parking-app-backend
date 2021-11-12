import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Reservate} from "./reservate.entity";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  cedula: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Reservate, (reservate) => reservate.user)
  reservates: Promise<Reservate>;
}
