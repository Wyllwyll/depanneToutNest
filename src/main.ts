<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
=======
import { ValidationPipe } from '@nestjs/common';
>>>>>>> d4903129a113f998afaf6238ff2ad87cdef4a0f1
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './errors/AllExceptionsFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.useGlobalPipes(new ValidationPipe());
=======
  app.useGlobalPipes(new ValidationPipe()) ;
  app.useGlobalFilters(new HttpExceptionFilter()) ;
>>>>>>> d4903129a113f998afaf6238ff2ad87cdef4a0f1
  await app.listen(3000);
}
bootstrap();
