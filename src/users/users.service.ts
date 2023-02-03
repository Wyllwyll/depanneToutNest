import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  /**
   * Ajout d'un user
   */
  async create(createUserDto: CreateUserDto) {
    const user = await User.create(createUserDto).save();
    delete user.password ;
    return user ;
  }


  /**
   * Récupération d'un user par son mail **ATTENTION : contient le password**
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
