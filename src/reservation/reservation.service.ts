import { Injectable } from '@nestjs/common';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FindOneReservationDto } from './dto/find-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {

  async create(userId : number, orderId : number) {
    console.log(userId, orderId );
    
    let newReservation = new Reservation();
    
    newReservation.user = await User.findOneBy({ id: userId })//createReservationDto.id;
    const linkOrder = await Order.findOneBy({ id: orderId })
    linkOrder.reserved = true
    await linkOrder.save()
    newReservation.order = linkOrder
    newReservation.numero = orderId+10
    return await newReservation.save();

  }

  /**
   * A faire :
   * La fonction doit retourner la liste des Resa correspondant au userId
   */
  async findUserReservation(userId : number){
    return await Reservation.findBy({user : {id : userId}}) 
    
  }




  /**
   * Pas Besoin
   */
  /*
  async findAllReservation() {
    const reservations = await Reservation.find()
    return reservations;
  }
  */

  /*
  async findOneReservation(findOneReservationDto: FindOneReservationDto) {
    return await Reservation.findOneBy({ order: { id: findOneReservationDto.orderId } });
  }
  */
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