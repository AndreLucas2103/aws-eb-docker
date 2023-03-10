import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3030, () => {
    console.log('listening on port ' + process.env.PORT || '3030');
  });
}
bootstrap();
