import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@Entity('receta')
@ObjectType()
export class Receta {

  
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  idreceta: number;

  @Column('text')
  @Field()
  nombrePlato: string;

  @Column('text')
  @Field()
  categoria: string;

  @Column('simple-array')
  @Field(() => [String])
  ingredientes: string[];

  @Column('text')
  @Field()
  calorias: string;

  @Column('text')
  @Field()
  estado: string;

  @OneToMany(() => Preparacion, (preparacion) => preparacion.receta)
  @Field(() => [Preparacion])
  preparaciones: Preparacion[];
}
