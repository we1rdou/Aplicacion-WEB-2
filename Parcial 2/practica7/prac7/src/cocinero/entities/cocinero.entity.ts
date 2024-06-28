import { ObjectType, Field, Int, Float,ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@Entity('cocinero')
@ObjectType()
export class Cocinero {


  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  idcocinero: number;

  @Column('text')
  @Field()
  nombre: string;

  @Column('text')
  @Field()
  apellido: string;

  @Column('text')
  @Field()
  cargo: string;

  @Column('float')
  @Field(() => Float)
  sueldo: number;

  @Column('text')
  @Field()
  estado: string;

  @OneToMany(() => Preparacion, (preparacion) => preparacion.cocinero)
  @Field(() => [Preparacion])
  preparaciones: Preparacion[];
}
