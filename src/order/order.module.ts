import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, UsersService]
})
export class OrderModule {}
