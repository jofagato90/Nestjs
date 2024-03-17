
import { AuthService } from './auth.service';
import { User } from 'src/users/users.entity';
import { Body, Controller, Post } from '@nestjs/common';
import {LoginDto} from './dto/login.dto';

@Controller('auth')
export class AuthController {
constructor (private readonly authService: AuthService){}


@Post('Login')
 async login(@Body() loginDto: LoginDto): Promise<User>{
 return this.authService.validateUser(loginDto.email, loginDto.password);

 }


}
