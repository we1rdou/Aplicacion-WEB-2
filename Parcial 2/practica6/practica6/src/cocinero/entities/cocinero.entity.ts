import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Preparacion } from '../../preparacion/entities/preparacion.entity';

@Entity('cocinero')
export class Cocinero {
  @PrimaryGeneratedColumn('increment')
  idcocinero: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('text')
  cargo: string;

  @Column('float')
  sueldo: number;

  @Column('text')
  estado: string;

  @OneToMany(() => Preparacion, (preparacion) => preparacion.cocinero)
  preparaciones: Preparacion[];
}
