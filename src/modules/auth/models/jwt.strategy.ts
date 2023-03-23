import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Config } from '@core/config';

import { UserResponseInterface } from './userResponse.interface';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get.hashKeyForJwtToken,
    });
  }

  async validate(payload: UserResponseInterface) {
    return { ...payload.user };
  }
}
