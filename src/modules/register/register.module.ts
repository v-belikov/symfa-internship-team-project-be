import { Module } from '@nestjs/common';

import { REGISTER_CONTROLLERS } from './controllers';
import { REGISTER_SERVICES } from './services';

@Module({
  providers: [...REGISTER_SERVICES],
  controllers: [...REGISTER_CONTROLLERS],
})
export class RegisterModule {}
