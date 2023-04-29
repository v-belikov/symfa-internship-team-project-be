import { Get } from '@nestjs/common';

import { UserTeacher } from '@entities/users';

import { DatabaseTeachersController as Controller } from '../decorators';
import { DatabaseService } from '../services';

@Controller()
export class DatabaseTeachersController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  async getAllTeachers(): Promise<UserTeacher[]> {
    return this._databaseService.getAllTeachers();
  }
}
