import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { faker } from '@faker-js/faker';
import { Rental } from './entities/rental/entities/rental.entity';
import { Car } from './entities/car/entities/car.entity';
import { CreateCarDto } from './entities/car/dto/create-car.dto';
import { UpdateCarDto } from './entities/car/dto/update-car.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/seed')
  async seed() {
    const rentalsRepo = this.dataSource.getRepository(Rental);
    for (let index = 0; index < 15; index++) {
      let rental = new Rental();
      rental.car_id = faker.number.int();
      rental.end_date = faker.date.soon(30);
      rental.start_date = faker.date.past(30);
      await rentalsRepo.save(rental);
    }
  }

  @Get('/api/cars')
  getAllCars() {
    const carsRepo = this.dataSource.getRepository(Car);
    return carsRepo.find();
  }

  @Post('/api/cars')
  async createNewCar(@Body() CreateCarDto: CreateCarDto) {
    const carsrepo = this.dataSource.getRepository(Car);
    let car = new Car();
    car.license_plate_number = CreateCarDto.license_plate_number;
    car.brand = CreateCarDto.brand;
    car.model = CreateCarDto.model;
    car.daily_cost = CreateCarDto.daily_cost;
    const now = new Date();
    car.created_at = now;
    await carsrepo.save(car);
  }

  @Post('api/car/:id/rent')
  async rentCar(@Param() id: number) {
    const rentalrepo = this.dataSource.getRepository(Rental);
    const now = new Date();
  }
}
