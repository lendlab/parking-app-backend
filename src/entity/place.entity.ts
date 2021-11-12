import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Parking} from "./parking.entity";

@ObjectType()
@Entity()
export class Place extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  place_id: number;

  @Field(() => Boolean)
  @Column({type: "boolean"})
  busy: Boolean;

  @OneToMany(() => Parking, (parking) => parking.place)
  parking: Promise<Parking>;
}
