import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  /**
   * Ajout d'un user
   * param name  nom du user
   * param hash  mot de pass hacher
   * returns     Le nouveau user
   */
  async create(createUserDto: CreateUserDto) {
    return await User.create(createUserDto).save();
  }

  /**
   * Récupération des info d'un users
   * param userId    id du user
   * returns         Le user avec ses commandes
   */
  /*
  async findOneById(userId: number): Promise<User> {
    
    const user = await User.findOne({
      relations: {
        orders: {
          lines: { menu: true },
          resto: true,
        },
      },
      where: {
        id: userId,
      },
    });
    
    return user;
  }*/

  /**
   * Récupération d'un user par son nom **ATTENTION : contient le password**
   * param name
   * returns
   */

  
  async findOneByMail(mail: string): Promise<User | null> {
    return await User.findOne({
      select: {
        id: true,
        username: true,
        mail: true,
        password: true,
      },
      where: {
        mail: mail,
      },
    });
  }
  
 /*
  async update(userId: number, adminLvl: number): Promise<User | null> {
    const user = await User.findOneBy({ id: userId });
    if (user !== null) {
      user.admin_lvl = adminLvl;
      await user.save();
    }
    return user;
  }
*/
}
