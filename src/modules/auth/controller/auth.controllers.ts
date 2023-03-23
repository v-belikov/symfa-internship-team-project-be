import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { UserParent } from '@entities/users';

import { LoginUserDto } from '../models';
import { UserResponseInterface } from '../models/userResponse.interface';
import { AuthService } from '../service/service';

@Controller()
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('user/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserResponseInterface> {
    const user = await this._authService.login(loginUserDto);

    return this._authService.buildUserResponse(user);
  }

  @Get('users')
  async getAllUsers(): Promise<UserParent[]> {
    return this._authService.getAllUsers();
  }

  @Get('user')
  async currentUser(@Req() request: any): Promise<UserResponseInterface> {
    return this._authService.buildUserResponse(request.headers);
  }
}
