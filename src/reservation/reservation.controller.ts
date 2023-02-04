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


  @Get("forUser")
  async findAll(@Body() findAllReservationDto: FindAllReservationDto) {

    const user = await this.reservationService.findAllReservation();

    if (!user) {
      throw new NotFoundException("Cet utilisateur n'existe pas.");
    }
    return this.reservationService.findAllReservation();
  }

  @Get("orderId")
  async findOne(@Body() findOneReservationDto: FindOneReservationDto) {

    const order = await this.reservationService.findOneReservation(findOneReservationDto);

    if (!order) {
      throw new NotFoundException("Cette réservation n'existe pas.");
    }
    return this.reservationService.findOneReservation(findOneReservationDto);
  }
} 
