import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Like } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindNameOrderDto } from './dto/findName-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';


/**
 * Class permettant la gestion des requètes SQL pour les orders
 * * **.createdorder()** :ajoute un nouveau order à la BDD
 * * **.findAllOrder()** : recupère tout les orders
 * * **.findOrder()** : recupère un order par son name
 * * **.findOne()** : recupère un order par ID del'order
 * * **.updateOrder()** : modifie un order par son ID
 */
@Injectable()
export class OrderService {

  /**
    * ajoute un nouveau order à la BDD
    */
  async createOrder(createOrderDto: CreateOrderDto, user: User) {

    const newOrder = Order.create({
      name: createOrderDto.name.toLowerCase(),
      price: createOrderDto.price,
      city: createOrderDto.city,
      start_time: createOrderDto.start_time,
      end_time: createOrderDto.end_time,
      user: user
    })

    const order = await Order.save(newOrder)
    return order;

  }

  /**
     *  recupère tout les orders
     */
  async findAllOrder() {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: { reserved: false }
    })
    return order;

  }

  /**
     *   recupère un order par son name
     */
  async findOrder(FindNameOrderDto: FindNameOrderDto) {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: { name: Like(`%${FindNameOrderDto.name.toLowerCase()}%`), reserved: false }

    })
    return order;
  }


  /**
     *  recupère un order par ID del'order
     */
  async findOne(orderId: number) {
    const order = await Order.findOne({
      where: { id: orderId, reserved: false },
      relations: { user: true }

    })
    return order;
  }

  /**
     *  modifie un order par son ID
     */
  async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto) {
    console.log(orderId);

    const updateOrder = await Order.findOneBy({ id: orderId });
    console.log(updateOrder);

    if (updateOrderDto.name) updateOrder.name = updateOrderDto.name.toLowerCase();
    if (updateOrderDto.city) updateOrder.city = updateOrderDto.city;
    if (updateOrderDto.price) updateOrder.price = updateOrderDto.price
    if (updateOrderDto.start_time) updateOrder.start_time = updateOrderDto.start_time
    if (updateOrderDto.end_time) updateOrder.end_time = updateOrderDto.end_time

    const order = await Order.save(updateOrder)
    return order
  }


}
