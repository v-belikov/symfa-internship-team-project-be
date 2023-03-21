import { Injectable } from '@nestjs/common';

import { UserService } from '@shared/user';
import { UserDto } from '@shared/user/models/user.dto';

@Injectable()
export class RegisterService {
  constructor(private _registerRepository: UserService) {}

  async createUser(user: UserDto) {
    return this._registerRepository.create(user);
  }
}
