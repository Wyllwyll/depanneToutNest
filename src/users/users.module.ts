import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  imports : [forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService,LocalStrategy],
  exports: [UsersService],
})
export class UsersModule {}
