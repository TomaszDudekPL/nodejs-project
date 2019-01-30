import * as moduleAlias from 'module-alias';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
moduleAlias.addPath(__dirname);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
