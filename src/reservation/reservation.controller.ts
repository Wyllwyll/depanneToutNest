import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
//import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

/* @Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) { }


  @Post("addreservation")
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }


  @Get("allreservationsforoneuser")
  findAll() {
    return this.reservationService.findAllReservation();
  }
} */

  /* findOne(@Body() id: string, updateOrderDto: UpdateOrderDto) {
    return this.reservationService.findReservation(updateOrderDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
 */