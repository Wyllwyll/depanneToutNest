import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
 
    async create(createReservationDto: CreateReservationDto) {
      const newReservation = new Reservation();
      newReservation.user = await User.findOneBy({id: createReservationDto.userid})//createReservationDto.id;
      newReservation.numero = newReservation.id+10
      await newReservation.save();
      return await this.findOneById(newReservation.id)
    }


  }

  findAll() {
    return `This action returns all reservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
