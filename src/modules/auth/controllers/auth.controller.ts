import { Body, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserParent } from '@entities/users';

import { AuthControllerDecorator as Controller } from '../decorators/index';
import { ApiAuthResponseModel, LoginUserDto } from '../models';
import { AuthService } from '../services';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @ApiResponse({ type: ApiAuthResponseModel })
  @Post('user/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    return this._authService.login(loginUserDto);
  }

  @Get('users')
  async getAllUsers(): Promise<UserParent[]> {
    return this._authService.getAllUsers();
  }
}
