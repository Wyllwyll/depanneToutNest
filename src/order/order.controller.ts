import { Controller, Get, Post, Body, Patch, NotFoundException, BadRequestException, Request, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { FindNameOrderDto } from './dto/findName-order.dto';


/**
 * Class permettant le contrôle des données entrantes et la gestion des erreurs pour les requête orders
 * * **.create()** : Contrôle préalable à l'ajout d'une nouvel order
 * * **.findAll()** : Contrôle préalable à la récupération de tout les orders
 * * **.findOne()** : Contrôle préalable à la récupération d'un order par son name
 * * **.findOrderUpdate()** : Contrôle préalable à la modification d'un order par son ID
 */
@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly usersService: UsersService
  ) { }


  /**
      * Contrôle préalable à l'ajout d'une nouvel order
      */
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Request() req) {


    const user: User = await this.usersService.findOneById(req.user.userId);
    const data = await this.orderService.createOrder(createOrderDto, user)

    if (!createOrderDto) {
      throw new BadRequestException('informations manquantes')
    }
    else {
      return data
    }
  }


  /**
        * Contrôle préalable à la récupération de tout les orders
        */
  @Get()
  async findAll() {
    const data = this.orderService.findAllOrder();
    return data
  }


  /**
        * Contrôle préalable à la récupération d'un order par son name
        */
  @Get('byName')
  async findOne(@Body() FindNameOrderDto: FindNameOrderDto) {
    const data = await this.orderService.findOrder(FindNameOrderDto);


    if (!data) {
      throw new NotFoundException("le nom ne correspond à aucun order")
    }
    return data
  }



  /**
        * Contrôle préalable à la modification d'un order par son ID
        */
  @UseGuards(JwtAuthGuard)
  @Patch()

  async findOrderUpdate(@Body() updateOrderDto: UpdateOrderDto) {
    const data = await this.orderService.findOne(updateOrderDto.id)

    console.log(data);

    if (!data) {
      throw new NotFoundException("l'ID' ne correspond à aucun order")
    }
    return await this.orderService.updateOrder(data.id, updateOrderDto)
  }
}


