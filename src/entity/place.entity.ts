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

enum States {
  libre = "Libre",
  solicitud_en_procesp = "Solicitado",
  ocupado = "Ocupado",
}

@ObjectType()
@Entity()
export class Place extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  place_id: number;

  @Field()
  @Column()
  place_number: number;

  @Field(() => Boolean)
  @Column({type: "boolean"})
  occuped: Boolean;

  @Field(() => String)
  @Column({type: "enum", enum: States})
  state: string;

  @OneToMany(() => Have, (have) => have.parking)
  have: Promise<Have>;

  @OneToMany(() => Reservate, (reservate) => reservate.place)
  reservate: Promise<Reservate>;
}
