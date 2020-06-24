import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

NestFactory.create(AppModule).then(app => {
  app.listen(PORT);
  console.info(`server started at http://localhost:${PORT}`);
});
