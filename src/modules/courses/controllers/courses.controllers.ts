import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CoursesService } from '@modules/courses/services';

import { ApiGetCoursesModel, QueryGetCoursesDto } from '../models';

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
  async getAllCourses(@Query() dto: QueryGetCoursesDto) {
    return this._coursesService.getAllCourses(dto);
  }

  @Get('teachers')
  @ApiResponse({
    type: ApiGetCoursesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getTeachers() {
    return this._coursesService.getTeachers();
  }
}
