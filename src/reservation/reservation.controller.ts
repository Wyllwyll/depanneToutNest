import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findAll(@Body() findAllReservationDto : FindAllReservationDto) {
    console.log(findAllReservationDto);
    
    return this.reservationService.findAllReservation();
  }

@Get("orderId")
  findOne(@Body() findonereservationDto: FindOneReservationDto) {
    return this.reservationService.findOneReservation(findonereservationDto);
  }
}