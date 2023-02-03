import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  ConflictException,
  Request,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


ConfigModule.forRoot()
const accessTokenSecret = process.env.SECRET_TOKEN!; // token

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
    ) {}

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

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Request() req) {
    const user = await this.usersService.findOneByMail(req.body.mail)
    return this.authService.login(user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async test(@Request() req){
    console.log(req.user);
  }
}