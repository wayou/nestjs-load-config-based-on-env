import { Controller, Get, Inject } from '@nestjs/common';
import { configFactory } from './configs/configFactory';

type ConfigType = typeof configFactory;

@Controller()
export class AppController {
  config: ConfigType;
  constructor(@Inject('CONFIG') config: ConfigType) {
    this.config = config;
  }

  @Get()
  getHello() {
    return this.config;
  }
}
