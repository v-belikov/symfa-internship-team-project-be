import { Controller, Get } from '@nestjs/common';

import { UserStudent } from '@entities/users';

import { DatabaseService } from '../services';

@Controller('students')
export class DatabaseStudentsController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  async getAllStudents(): Promise<UserStudent[]> {
    return this._databaseService.getAllStudents();
  }
}
