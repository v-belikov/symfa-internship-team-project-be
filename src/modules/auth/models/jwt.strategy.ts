import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Config } from '@core/config';

import { ApiAuthResponseModel } from './api-auth-response.model';

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

  async validate(payload: ApiAuthResponseModel) {
    // TODO check
    console.log({ payload });

    return { ...payload };
  }
}
