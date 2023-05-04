import { Module } from '@nestjs/common';

import { CoursesController } from './controllers';
import { CoursesService } from './services';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
