import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}

  async validateUser(mail: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByMail(mail);
    const isOk = await bcrypt.compare( password, user.password);

    if (user && isOk) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    
    const payload = { username: user.username, sub: user.id };
    
    return {
        statusCode: 200,
        message: [`Connection de ${user.username}`],
        succes: 'OK',
        data: {
          username: user.username,
          mail: user.mail,
          token: this.jwtService.sign(payload),
        },
      };
  }
}