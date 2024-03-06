import { Module } from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import * as dotenv from 'dotenv';
dotenv.config();//Cargamos las variables de configuracion
@Module({
 imports:[UsersModule],
 controllers:[UsersController],
 providers:[UsersService]

})
export class UsersModule {}
