import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserParent } from '@entities/users';

import { JwtStrategy } from './models/jwt.strategy';
import { AUTH_CONTROLLER } from './controller';
import { AuthService } from './service';

@Module({
  imports: [
    JwtModule.register({ secret: Config.get.hashKeyForJwtToken, signOptions: { expiresIn: '60s' } }),
    TypeOrmModule.forFeature([UserParent]),
  ],
  controllers: [...AUTH_CONTROLLER],
  providers: [AuthService, JwtStrategy, Repository],
})
export class AuthModule {}
