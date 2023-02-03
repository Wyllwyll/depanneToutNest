import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Like } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {


  async createOrder(createOrderDto: CreateOrderDto) {

    const newOrder = Order.create({
      name: createOrderDto.name,
      price: createOrderDto.price,
      city: createOrderDto.city,
      start_time: createOrderDto.start_time,
      end_time: createOrderDto.end_time,
      reserved: createOrderDto.reserved,
      user: await User.findOneBy({ id: createOrderDto.ownerId })

    })
    const order = await Order.save(newOrder)
    return order;

  }


  async findAllOrder() {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: { reserved: false }
    })
    return order;

  }


  async findOrder(updateOrderDto: UpdateOrderDto) {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: { name: Like(`%${updateOrderDto.name}%`), reserved: false }
    })
    return order;
  }



  async findOne(orderId: number) {
    const order = await Order.findOne({
      where: { id: orderId, reserved: false },
      relations: { user: true }

    })
    return order;
  }


  async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto) {
    const updateOrder = await Order.findOneBy({ id: orderId });
    updateOrder.name = updateOrderDto.name
    updateOrder.city = updateOrderDto.city
    updateOrder.price = updateOrderDto.price
    updateOrder.start_time = updateOrderDto.start_time
    updateOrder.end_time = updateOrderDto.end_time

    const order = await Order.save(updateOrder)
    return order
  }


  async ifReserved(id: number) {
    return `This action removes a #${id} order`;
  }
}
