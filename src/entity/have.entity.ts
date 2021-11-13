import {Field, ObjectType} from "type-graphql";
import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Parking} from "./parking.entity";
import {Place} from "./place.entity";

@ObjectType()
@Entity()
export class Have {
  @Field()
  @PrimaryGeneratedColumn()
  have_id: number;

  @Field(() => Place, {nullable: true})
  @ManyToOne(() => Place, (place) => place.have)
  place: Place;

  @Field(() => Parking, {nullable: true})
  @ManyToOne(() => Parking, (parking) => parking.have)
  parking: Parking;
}
