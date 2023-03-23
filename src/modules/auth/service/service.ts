import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserParent } from '@entities/users';

import { LoginUserDto } from '../models/login.dto';
import { UserResponseInterface } from '../models/userResponse.interface';

import { compare } from 'bcrypt';
// import { bcrypt } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserParent)
    private readonly _authRepository: Repository<UserParent>,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<UserParent> {
    const user = await this._authRepository
      .createQueryBuilder('user')
      .select(['user.email', 'user.password'])
      .where('user.email = :email', { email: loginUserDto.email })
      .getOne();

    console.log('user: ' + user);

    if (!user) {
      throw new HttpException(`User doesn't exist`, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const IsPasswordCorrect = await compare(loginUserDto.password, user.password);

    if (!IsPasswordCorrect) {
      throw new HttpException(`Check your password`, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    delete user.password;

    return user;
  }

  async getAllUsers(): Promise<UserParent[]> {
    return this._authRepository.find({
      order: {
        createdAt: 'asc',
      },
    });
  }

  generateJwt(user: UserParent): string {
    return this._jwtService.sign(
      {
        id: user.id,
        userName: user.name,
        userEmail: user.email,
      },
      { secret: Config.get.hashKeyForJwtToken },
    );
  }

  buildUserResponse(user: UserParent): UserResponseInterface {
    return {
      user: { ...user, token: this.generateJwt(user) },
    };
  }
}
