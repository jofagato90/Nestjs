import { Controller, Get, Post,  Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name')
  getHello(@Param('name')name:string): string {
    return this.appService.getHello(name);
  }


  @Post('bye')
  sayGoodbay(): string {
     return this.appService.sayGoodbay();


  }
}