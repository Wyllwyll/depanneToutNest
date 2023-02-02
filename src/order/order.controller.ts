import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}


  @Post("addorder")
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }



  @Get("getallorder")
  findAll() {
    return this.orderService.findAllOrder();
  }



  @Get('nameorder')
  findOne(@Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.findOrder(updateOrderDto);
  }


  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.ifReserved(+id);
  }
}
