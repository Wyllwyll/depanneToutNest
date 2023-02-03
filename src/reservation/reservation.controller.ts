import { Controller, Get, Post, Body } from '@nestjs/common';
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
  findAll(@Body() findAllReservationDto: FindAllReservationDto) {
    console.log(findAllReservationDto);

    return this.reservationService.findAllReservation();
  }

  @Get("orderId")
  findOne(@Body() findonereservationDto: FindOneReservationDto) {
    return this.reservationService.findOneReservation(findonereservationDto);
  }
/*
  try {
  const resa = reservationService.findOneReservation(userId, orderId);

  if (!resa) {
    return res.status(404).json({
      status: EStatus.FAILED,
      message:'La reservation demandée n existe pas, veuillez changer svp.',
      data: null,
    } as TApiResponse);
  }

  res.status(200).json({
    status: EStatus.OK,
    message: 'Votre reservation est la suivante:',
    data: resa.raw,
  } as TApiResponse);
} catch (err) {
  console.log(err);

  return res.status(500).json({
    status: EStatus.FAILED,
    message: 'Erreur serveur.',
    data: null,
  } as TApiResponse);
  */
} 
