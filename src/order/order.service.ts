import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Like } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindNameOrderDto } from './dto/findName-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {


  async createOrder(createOrderDto: CreateOrderDto, user:User) {

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


  async findAllOrder() {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: { reserved: false }
    })
    return order;

  }


  async findOrder(FindNameOrderDto:FindNameOrderDto) {
    const order = await Order.find({
      relations: { user: true },
      select: { user: { username: true } },
      where: {  name: Like(`%${FindNameOrderDto.name.toLowerCase()}%`), reserved: false }
      
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
    updateOrder.name = updateOrderDto.name.toLowerCase()
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
