import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); // agar end point bisa d panggil
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
}
// async function bootstrap() {
//   // const app = await NestFactory.create(AppModule);
//   const app = await NestFactory.create(AppModule, {cors: {
//     origin: true,
//     preflightContinue: false,
//   }});
//   await app.listen(3000);
// }
bootstrap();
