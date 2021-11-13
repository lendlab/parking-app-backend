import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Have} from "./have.entity";
import {Reservate} from "./reservate.entity";

@ObjectType()
@Entity()
export class Place extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  place_id: number;

  @Field(() => Boolean)
  @Column({type: "boolean"})
  occuped: Boolean;

  @OneToMany(() => Have, (have) => have.parking)
  have: Promise<Have>;

  @OneToMany(() => Reservate, (reservate) => reservate.place)
  reservate: Promise<Reservate>;
}
