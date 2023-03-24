import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserParent } from '@entities/users';

import { ApiAuthResponseModel, LoginUserDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserParent)
    private readonly _authRepository: Repository<UserParent>,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    console.log('login user enter: ' + loginUserDto);

    const user = await this._authRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.password'])
      .where('user.email = :email', { email: loginUserDto.email })
      .getOne();

    if (!user) {
      throw new UnprocessableEntityException(`User doesn't exist`);
    }

    const isPasswordCorrect = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new UnprocessableEntityException(`Check your password`);
    }

    delete user.password;

    return this._buildUserResponse(user);
  }

  async getAllUsers(): Promise<UserParent[]> {
    return this._authRepository.find({
      order: {
        createdAt: 'asc',
      },
    });
  }

  private _generateJwt(user: UserParent): string {
    console.log('generateJwt = ' + user);

    return this._jwtService.sign(
      {
        id: user.id,
        email: user.email,
      },
      { secret: Config.get.hashKeyForJwtToken },
    );
  }

  private _buildUserResponse(user: UserParent): ApiAuthResponseModel {
    return {
      token: this._generateJwt(user),
    };
  }
}
