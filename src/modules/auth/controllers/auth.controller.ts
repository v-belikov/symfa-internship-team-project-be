import { Body, Delete, Get, Param, ParseUUIDPipe, Post, Request } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserParent } from '@entities/users';
import { UserService } from '@shared/user';
import { IsAuthenticated } from '@shared/user/decorators';

import { AuthControllerDecorator as Controller } from '../decorators/index';
import { ApiAuthResponseModel, LoginUserDto } from '../models';
import { AuthService } from '../services';

@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService, private readonly _userService: UserService) {}

  @ApiResponse({ type: ApiAuthResponseModel })
  @Post('user/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    return this._authService.login(loginUserDto);
  }

  @Get('users')
  async getAllUsers(): Promise<UserParent[]> {
    return this._authService.getAllUsers();
  }

  @IsAuthenticated()
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Delete('remove/:id')
  async removeUser(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);

    return this._userService.remove(id);
  }
}
