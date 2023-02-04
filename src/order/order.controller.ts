import { Controller, Get, Post, Body, Patch, NotFoundException, BadRequestException, Request, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { FindNameOrderDto } from './dto/findName-order.dto';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly usersService: UsersService
    ) { }


  /** Possibles verif supplémentaires : 
   * * start < end
   * * pas de superposition des dates
  */
  @UseGuards(JwtAuthGuard)
  @Post()         // Suppression de "addOrder" dans la route
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



  @Get()              // Suppression de "getAllOrder" dans la route
  async findAll() {
    const data = this.orderService.findAllOrder();
    return data
  }



  @Get('byName')
  async findOne(@Body() FindNameOrderDto: FindNameOrderDto) {
    const data = await this.orderService.findOrder(FindNameOrderDto);


    if (!data) {
      throw new NotFoundException("le nom ne correspond à aucun order")
    }
    return data
  }



  /** Possibles verif supplémentaires : 
   * * Ajouter l'AuthGuard
   */
  @UseGuards(JwtAuthGuard)
  @Patch()              // Suppression de "updateOrder" dans la route
  
  async findOrderUpdate(@Body() updateOrderDto: UpdateOrderDto) {
    const data = await this.orderService.findOne(updateOrderDto.id)
    
    // Vérifier si le l'order appartient bien au user du token
    console.log(data);
    
    if (!data) {
      throw new NotFoundException("l'ID' ne correspond à aucun order")
    }
    return await this.orderService.updateOrder(data.id, updateOrderDto)
  }
}


