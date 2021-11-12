import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Parking} from "./parking.entity";
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

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User, (user) => user.reservates)
  user: User;

  @Field(() => Parking,{nullable: true})
  @ManyToOne(() => Parking, (parking) => parking.reservates)
  parking: Parking;
}
