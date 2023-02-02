import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  ConflictException,
  UnauthorizedException,
  Bind,
  ParseIntPipe,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'; // token
import { LoginUserDto } from './dto/login-user.dto';

ConfigModule.forRoot()
const accessTokenSecret = process.env.SECRET_TOKEN!; // token

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(@Body() createUserDto: CreateUserDto) {
    const userExist = await this.usersService.findOneByMail(createUserDto.mail);

    if (userExist) {
      throw new ConflictException("Cette Email est déjà enregistré");
    }
    if (createUserDto.password !== createUserDto.password_verif){
      throw new ConflictException("Les 2 mots de passe ne correspondent pas")
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    
    const data = await this.usersService.create(createUserDto);
    return {
      statusCode: 201,
      message: `${createUserDto.username} bien enregistré`,
      succes: 'Created',
      data: data,
    };
  }

  /** Authentification d'un User, fourni le token */
  
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() loginUserDto: LoginUserDto) {
    const data = await this.usersService.findOneByMail(loginUserDto.mail);

    if (!data) {
      throw new UnauthorizedException("Mail ou mot de passe incorrecte");
    }
    const isOk = await bcrypt.compare( loginUserDto.password, data.password);

    if (!isOk) {
      throw new UnauthorizedException("Mail ou mot de passe incorrecte");
    }

    const token = {
      id: data.id
    };

    return {
      statusCode: 200,
      message: [`Connection de ${data.username}`],
      succes: 'OK',
      data: {
        username: data.username,
        mail: data.mail,
        token: jwt.sign(token, accessTokenSecret!),
      },
    };
  }

/*
  @Get(':id')
  @Bind(Param('id', new ParseIntPipe()))
  findOne(id: string) {
    return this.usersService.findOneById(+id);
  }
  */
  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
*/
}