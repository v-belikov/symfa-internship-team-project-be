import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CoursesService } from '@modules/courses/services';

import { ApiGetCoursesModel } from '../models';

@Controller('courses')
@ApiTags('courses')
export class CoursesControllers {
  constructor(private readonly _coursesService: CoursesService) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetCoursesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllCourses() {
    return this._coursesService.getAllCourses();
  }
}
