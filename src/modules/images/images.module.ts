import { Module } from '@nestjs/common';

import { IMAGES_CONTROLLERS } from './controllers';
import { IMAGES_SERVICES } from './services';

@Module({
  controllers: [...IMAGES_CONTROLLERS],
  providers: [...IMAGES_SERVICES],
})
export class ImagesModule {}
