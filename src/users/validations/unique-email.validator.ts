import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'uniqueEmail', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UsersService) {}

  async validate(email: string) {
    try {
      await this.userService.findByEmail(email);
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultmessage(): string {
    return 'Email allready exits';
  }
}
