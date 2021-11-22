import {Field, ObjectType} from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Have} from "./have.entity";

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
  @Column()
  image: string;

  @Field()
  @Column()
  minutes: number;

  @Field()
  @Column({nullable: true})
  longitude: number;

  @Field()
  @Column({nullable: true})
  latitude: number;

  @OneToMany(() => Have, (have) => have.parking)
  have: Promise<Have>;
}
