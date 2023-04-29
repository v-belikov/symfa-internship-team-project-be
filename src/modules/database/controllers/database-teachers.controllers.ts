import { Controller, Get } from '@nestjs/common';

import { UserTeacher } from '@entities/users';

import { DatabaseService } from '../services';

@Controller('teachers')
export class DatabaseTeachersController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  async getAllTeachers(): Promise<UserTeacher[]> {
    return this._databaseService.getAllTeachers();
  }
}
