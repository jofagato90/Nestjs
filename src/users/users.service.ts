import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(name): string {
        return 'Hello World!'+ name;
      }



}
