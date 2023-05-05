import { Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserTeacher } from '@entities/users';

import { DatabasesController as Controller } from '../decorators';
import { FilterUserDto } from '../models';
import { DatabaseService } from '../services';

@Controller('teachers')
@ApiTags('teachers')
export class DatabaseTeachersController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllTeachers(@Query() data: FilterUserDto): Promise<UserTeacher[]> {
    return this._databaseService.getAllTeachers(data);
  }
}
