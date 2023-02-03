import { Controller, Get, Post, Body, Patch, NotFoundException, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }


  @Post("addorder")
  async create(@Body() createOrderDto: CreateOrderDto) {
    const data = await this.orderService.createOrder(createOrderDto)
    if (!createOrderDto) {
      throw new BadRequestException('informations manquantes')
    }
    else {
      return data
    }
  }



  @Get("getAllOrder")
  async findAll() {
    const data = this.orderService.findAllOrder();
    return data
  }



  @Get('nameOrder')
  async findOne(@Body() updateOrderDto: UpdateOrderDto) {
    const data = await this.orderService.findOrder(updateOrderDto)

    if (!data) {
      throw new NotFoundException("le nom ne correspond à aucun order")
    }
    return data
  }




  @Patch('updateOrder')
  async findOrderUpdate(@Body() updateOrderDto: UpdateOrderDto) {
    const data = await this.orderService.findOne(updateOrderDto.id)

    if (!data) {
      throw new NotFoundException("l'ID' ne correspond à aucun order")
    }
    return await this.orderService.updateOrder(data.user.id, updateOrderDto)
  }
}


