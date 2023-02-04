import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { OrderService } from 'src/order/order.service';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService, OrderService]
})
export class ReservationModule { }
