import { Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CourseEntity } from '@entities/courses';

import { CoursesController as Controller } from '../decorators';
import { ApiGetCoursesModel, QueryGetCoursesDto } from '../models';
import { CoursesService } from '../services';

@Controller()
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly _coursesService: CoursesService) {}

  @Get('all')
  @ApiResponse({
    type: ApiGetCoursesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllCourses(@Query() dto: QueryGetCoursesDto): Promise<CourseEntity[]> {
    return this._coursesService.getAllCourses(dto);
  }

  @Get('teachers')
  @ApiResponse({
    type: ApiGetCoursesModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  async getTeachers(): Promise<string[]> {
    return this._coursesService.getTeachers();
  }
}
