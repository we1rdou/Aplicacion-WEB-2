import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@Entity('receta')
export class Receta {
  @PrimaryGeneratedColumn('increment')
  idreceta: number;

  @Column('text')
  nombrePlato: string;

  @Column('text')
  categoria: string;

  @Column('simple-array')
  ingredientes: string[];

  @Column('text')
  calorias: string;

  @Column('text')
  estado: string;

  @OneToMany(() => Preparacion, (preparacion) => preparacion.receta)
  preparaciones: Preparacion[];
}
