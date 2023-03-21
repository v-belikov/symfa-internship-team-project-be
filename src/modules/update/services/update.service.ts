import { Injectable } from '@nestjs/common';

import { UserService } from '@shared/user';
import { UserEditDto } from '@shared/user/models/user-edit.dto';

@Injectable()
export class UpdateService {
  constructor(private _updateRepository: UserService) {}

  async updateUser(user: UserEditDto) {
    return this._updateRepository.update(user);
  }
}
