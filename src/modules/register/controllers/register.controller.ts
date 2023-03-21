import { Body, Post } from '@nestjs/common';

import { UserDto } from '@shared/user';

import { Register_Controller as Controller } from '../decorators';
import { RegisterService } from '../services';

@Controller()
export class RegisterController {
  constructor(private _registerService: RegisterService) {}

  @Post()
  async register(@Body() user: UserDto) {
    return this._registerService.createUser(user);
  }
}
