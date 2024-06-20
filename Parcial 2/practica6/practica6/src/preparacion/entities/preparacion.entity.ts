import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Receta } from '../../receta/entities/receta.entity';
import { Cocinero } from '../../cocinero/entities/cocinero.entity';

@Entity('preparacion')
export class Preparacion {
  @PrimaryGeneratedColumn('increment')
  idpreparacion: number;

  @ManyToOne(() => Receta, (receta) => receta.preparaciones, { eager: false })
  @JoinColumn({ name: 'receta_idreceta' })
  receta: Receta;

  @ManyToOne(() => Cocinero, (cocinero) => cocinero.preparaciones, { eager: false })
  @JoinColumn({ name: 'cocinero_idcocinero' })
  cocinero: Cocinero;

  @Column('text')
  fecha: string;

  @Column('text')
  hora: string;

  @Column('int')
  cantidadProductos: number;

  @Column('float')
  costo: number;

  @Column('int')
  tiempoEstimado: number;

  @Column('text')
  estado: string;
}
