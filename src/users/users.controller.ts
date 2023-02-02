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
      throw new ConflictException();
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    
    const data = await this.usersService.create(createUserDto);
    return {
      statusCode: 201,
      message: [`${createUserDto.username} bien enregistré`],
      succes: 'Created',
      data: data,
    };
  }

  /** Authentification d'un User, fourni le token */
  /*
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.findOneByName(createUserDto.name);

    if (!data) {
      throw new UnauthorizedException();
    }
    const isOk = await bcrypt.compare( createUserDto.password, data.password);

    if (!isOk) {
      throw new UnauthorizedException();
    }

    const token = {
      id: data.id,
      admin_lvl: data.admin_lvl,
    };

    return {
      statusCode: 200,
      message: [`Connection de ${createUserDto.name}`],
      succes: 'OK',
      data: {
        id: data.id,
        admin_lvl: data.admin_lvl,
        name: data.name,
        token: jwt.sign(token, accessTokenSecret!),
      },
    };
  }
*/
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