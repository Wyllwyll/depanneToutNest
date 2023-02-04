import { Controller, Get, Post, Body, ConflictException, UseGuards, Request } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FindAllReservationDto } from './dto/findall-reservation.dto';
import { FindOneReservationDto } from './dto/find-reservation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderService } from 'src/order/order.service';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';

@Controller('reservations')
export class ReservationController {
  constructor(
    private readonly reservationService: ReservationService,
    private readonly ordersService: OrderService
  ) { }


  /**
   * Celui-ci me semble Ok
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto, @Request() req) {
    const userId = req.user.userId
    const orderId = createReservationDto.orderId
    const order = await this.ordersService.findOne(orderId)
    if (!order) {
      throw new NotFoundException("Ce service n'existe pas ou est déjà réservé.")
    }
    if (userId === order.user.id) {
      throw new ForbiddenException("Vous ne pouvez pas reserver votre propre service.")
    }
    return this.reservationService.create(userId, orderId);
  }

  /**
   * A faire :
   * Crée et utilisé la methode : findUserReservation DANS LE SERVICE !
   */
  @UseGuards(JwtAuthGuard)
  @Get("forUser")
  async findAll(@Request() req) {
    const userId = req.user.id ;
    return await this.reservationService.findUserReservation(userId)

  }

  /**
   * Pas Besoin !
   */
  /*
  @Get("orderId")
  async findOne(@Body() findOneReservationDto: FindOneReservationDto) {

    const order = await this.reservationService.findOneReservation(findOneReservationDto);

    if (!order) {
      throw new NotFoundException("Cette réservation n'existe pas.");
    }
    return this.reservationService.findOneReservation(findOneReservationDto);
  }*/
} 
