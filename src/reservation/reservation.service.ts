import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  
    async create(createReservationDto: CreateReservationDto) {
      const newReservation = new Reservation();
      newReservation.user = await User.findOneBy({id: createReservationDto.userId})//createReservationDto.id;
      newReservation.order = await Order.findOneBy({id: createReservationDto.order})
      newReservation.numero = newReservation.id+10
      await newReservation.save();
      return await User, Order.findOneBy(createReservationDto.userId, createReservationDto.order );
    }
  }

   findAllReservation() {
    const reservation = await Reservation.find()
    return reservation;
  }


/* function findAllReservation() {
  throw new Error('Function not implemented.');
}
  /* findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
function findAllReservation() {
  throw new Error('Function not implemented.');
}

 */