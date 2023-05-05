import { Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserStudent } from '@entities/users';

import { DatabasesController as Controller } from '../decorators';
import { FilterUserDto } from '../models';
import { DatabaseService } from '../services';

@Controller('students')
@ApiTags('students')
export class DatabaseStudentsController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
  })
  async getAllStudents(@Query() data: FilterUserDto): Promise<UserStudent[]> {
    return this._databaseService.getAllStudents(data);
  }
}
