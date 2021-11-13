import {Field, ObjectType} from "type-graphql";
import {BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Parking} from "./parking.entity";
import {Place} from "./place.entity";

@ObjectType()
@Entity()
export class Have extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  have_id: number;

  @Field(() => Place, {nullable: true})
  @ManyToOne(() => Place, (place) => place.have, {
    onDelete: "CASCADE",
    primary: true,
  })
  place: Place;

  @Field(() => Parking, {nullable: true})
  @ManyToOne(() => Parking, (parking) => parking.have, {
    onDelete: "CASCADE",
    primary: true,
  })
  parking: Parking;
}
