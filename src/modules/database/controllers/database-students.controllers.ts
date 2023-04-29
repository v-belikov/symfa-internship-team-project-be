import { Get } from '@nestjs/common';

import { UserStudent } from '@entities/users';

import { DatabaseStudentsController as Controller } from '../decorators';
import { DatabaseService } from '../services';

@Controller()
export class DatabaseStudentsController {
  constructor(private readonly _databaseService: DatabaseService) {}

  @Get()
  async getAllStudents(): Promise<UserStudent[]> {
    return this._databaseService.getAllStudents();
  }
}
