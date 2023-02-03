import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Reservation } from './reservation/entities/reservation.entity';
import { AuthModule } from './auth/auth.module';
import 'reflect-metadata'
import { ReservationModule } from './reservation/reservation.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Order, User, Reservation],
      synchronize: true,
    }),
    OrderModule,
    UsersModule,
    ReservationModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
