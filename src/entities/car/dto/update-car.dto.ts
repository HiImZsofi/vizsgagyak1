import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  license_plate_number: string;
  brand: string;
  model: string;
  daily_cost: number;
}
