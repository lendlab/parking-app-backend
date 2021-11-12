import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Place} from "./place.entity";
import {Reservate} from "./reservate.entity";

@ObjectType()
@Entity()
export class Parking extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  parking_id: number;

  @Field()
  @Column()
  parking_name: string;

  @Field()
  @Column({nullable: true})
  longitude: number;

  @Field()
  @Column({nullable: true})
  latitude: number;

  @Field(() => Place, {nullable: true})
  @ManyToOne(() => Place, (place) => place.parking)
  place: Place;

  @OneToMany(() => Reservate, (reservate) => reservate.parking)
  reservates: Promise<Reservate>;
}
