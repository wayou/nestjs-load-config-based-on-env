import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configFactory } from './configs/configFactory';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, configFactory],
})
export class AppModule {}
