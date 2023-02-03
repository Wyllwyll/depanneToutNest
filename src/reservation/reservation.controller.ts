import { Controller, Get, Post, Body, ConflictException } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FindAllReservationDto } from './dto/findall-reservation.dto';
import { FindOneReservationDto } from './dto/find-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) { }

  @Post("add")
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }


  @Get("forUser")
  async findAll(@Body() findAllReservationDto: FindAllReservationDto) {
  
    const user = await this.reservationService.findAllReservation();

    if (!user) {
      throw new ConflictException("Cet utilisateur n'existe pas.");
    }
    return this.reservationService.findAllReservation();
  }

  @Get("orderId")
  async findOne(@Body() findOneReservationDto: FindOneReservationDto) {

    const order = await this.reservationService.findOneReservation(findOneReservationDto);

    if (!order) {
      throw new ConflictException("Cette réservation n'existe pas.");
    }
    return this.reservationService.findOneReservation(findOneReservationDto);
  }
} 
