
import { Controller, Get, Post,  Param } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    @Get('/hello/:name')
    getHello(@Param('name')name:string): string {
      return this.usersService.getHello(name);
    }


}
