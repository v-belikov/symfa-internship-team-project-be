import { Body, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserDto } from '@shared/user';

import { RegisterController as Controller } from '../decorators';
import { RegisterService } from '../services';

@Controller()
@ApiTags('register')
export class RegisterController {
  constructor(private _registerService: RegisterService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async register(@Body() user: UserDto) {
    return this._registerService.createUser(user);
  }
}
