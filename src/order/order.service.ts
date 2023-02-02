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
    const order = await Order.find()
    return order;
  }




  async findOrder(updateOrderDto: UpdateOrderDto) {
    const order = await Order.findBy({ name: Like(updateOrderDto.name) })
    return order;
  }





  ifReserved(id: number) {
    return `This action removes a #${id} order`;
  }
}
