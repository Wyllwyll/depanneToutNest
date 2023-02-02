import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './errors/AllExceptionsFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()) ;
  app.useGlobalFilters(new HttpExceptionFilter()) ;
  await app.listen(3000);
}
bootstrap();
