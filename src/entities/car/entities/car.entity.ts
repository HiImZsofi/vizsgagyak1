import { Rental } from 'src/entities/rental/entities/rental.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  license_plate_number: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  daily_cost: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Rental, (rental) => rental.car_id)
  car: Car;
}
