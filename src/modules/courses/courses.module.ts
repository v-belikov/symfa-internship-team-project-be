import { Module } from '@nestjs/common';

import { CoursesControllers } from '@modules/courses/controllers/courses.controllers';
import { CoursesService } from '@modules/courses/services';

@Module({
  exports: [CoursesService],
  controllers: [CoursesControllers],
  providers: [CoursesService],
})
export class CoursesModule {}
