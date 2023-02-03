import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FindOneReservationDto } from './dto/find-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  
    async create(createReservationDto: CreateReservationDto) {
      const newReservation = new Reservation();
      newReservation.user = await User.findOneBy({id: createReservationDto.userId})//createReservationDto.id;
      newReservation.order = await Order.findOneBy({id: createReservationDto.order})
      newReservation.numero = newReservation.id+10
      return await newReservation.save();
      
    }

   async findAllReservation() {
    const reservation = await Reservation.find()
    return reservation;
  }

  async findOneReservation(findOneReservationDto: FindOneReservationDto){
    return await Reservation.findOneBy({order : {id : findOneReservationDto.orderId}})
  }
}

/**
 * find :
 * Trouver un ensemble de lignes dans un tableau
 * 
 * Exemple : Tous les users :
 * User.find()
 * 
 * Exemple : Un user avec son id  (return une liste de users):
 * User.find(
 *  {
 *    where : {
 *     id : userId
 *    }
 *  }
 * )
 * 
 * OU : avec le .findBy :
 * User.findBy({id: userId}) 
 * 
 * Exemple : Avec 2 conditions ou +
 * User.find(
 *  {
 *    where : {
 *      id : userId,
 *      name : userName
 *    }
 *  }
 * )
 * 
 * Exemple : Seulement le userId :
 *  User.find(
 *  {
 *    select : {
 *      id : true,
 *      password : true,
 *      email : false
 *    },
 *    where : {
 *     id : userId
 *    }
 *  }
 * )
 * 
 * 
 * TABLES CROISEES :
 * Table User { id , name , pass }
 * Table Order { id , user , price }
 * 
 * Liaison : User.orders  <=> Order.user
 * 
 * 
 * Exemple : Tous les user avec leur Orders :
 * User.find(
 *  {
 *    relations : {
 *      orders : true
 *    }
 *  }
 * )
 * 
 * Exemple : Tous les user avec leur Orders id :
 * User.find(
 *  {
 *    select :{
 *      ID :
 *      orders : {
 *        id : true
 *      }
 *    },
 *    relations : {
 *      orders : true
 *    }
 *  }
 * )
 * 
 * 
 */