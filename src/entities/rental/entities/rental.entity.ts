import { Car } from 'src/entities/car/entities/car.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  car_id: Number;

  @CreateDateColumn()
  start_date: Date;

  @CreateDateColumn()
  end_date: Date;

  @OneToMany(() => Car, (car) => car.id)
  car: Car;
}
