import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app serve para instânciar
  // useGlobalPipes serve para ser usado em cada manipulador de rota HTTP 
  // é um recurso que vai fazer a validação de forma global pra qulaquer requisição que chegar na aplicação.
  app.useGlobalPipes(new ValidationPipe);
  await app.listen(3000);
}
bootstrap();
