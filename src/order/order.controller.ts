import { Controller, Get, Post, Body, Patch, NotFoundException, BadRequestException, Request, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { FindNameOrderDto } from './dto/findName-order.dto';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly usersService: UsersService
    ) { }

  @UseGuards(JwtAuthGuard)
  @Post("addorder") 
  async create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    //console.log('test', req.user);
    
    const user : User = await this.usersService.findOneById(req.user.userId);
    const data = await this.orderService.createOrder(createOrderDto,user)

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
  async findOne(@Body() FindNameOrderDto: FindNameOrderDto) {
    const data = await this.orderService.findOrder(FindNameOrderDto)

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


