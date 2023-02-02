import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  /**
   * Ajout d'un user
   * @param name  nom du user
   * @param hash  mot de pass hacher
   * @returns     Le nouveau user
   */
  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.password = createUserDto.password;
    await newUser.save();
    return await this.findOneById(newUser.id)
  }

  /**
   * Récupération des info d'un users
   * @param userId    id du user
   * @returns         Le user avec ses commandes
   */
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
    console.log(user.somme());
    
    return user;
  }

  /**
   * Récupération d'un user par son nom **ATTENTION : contient le password**
   * @param name
   * @returns
   */
  async findOneByName(name: string): Promise<User | null> {
    return await User.findOne({
      select: {
        id: true,
        name: true,
        admin_lvl: true,
        password: true,
      },
      where: {
        name: name,
      },
    });
  }
  async update(userId: number, adminLvl: number): Promise<User | null> {
    const user = await User.findOneBy({ id: userId });
    if (user !== null) {
      user.admin_lvl = adminLvl;
      await user.save();
    }
    return user;
  }
}
