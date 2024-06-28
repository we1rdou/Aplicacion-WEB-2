import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Receta } from '../../receta/entities/receta.entity';
import { Cocinero } from '../../cocinero/entities/cocinero.entity';

@Entity('preparacion')
@ObjectType()
export class Preparacion {

  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  idpreparacion: number;

  @ManyToOne(() => Receta, (receta) => receta.preparaciones, { eager: false })
  @JoinColumn({ name: 'receta_idreceta' })
  @Field(() => Receta)
  receta: Receta;

  @ManyToOne(() => Cocinero, (cocinero) => cocinero.preparaciones, { eager: false })
  @JoinColumn({ name: 'cocinero_idcocinero' })
  @Field(() => Cocinero)
  cocinero: Cocinero;

  @Column('text')
  @Field()
  fecha: string;

  @Column('text')
  @Field()
  hora: string;

  @Column('int')
  @Field(() => Int)
  cantidadProductos: number;

  @Column('float')
  @Field(() => Float)
  costo: number;

  @Column('int')
  @Field(() => Int)
  tiempoEstimado: number;

  @Column('text')
  @Field()
  estado: string;
}
