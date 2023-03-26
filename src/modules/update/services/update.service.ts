import { Injectable } from '@nestjs/common';

import { UserService } from '@shared/user';
import { UserEditDto } from '@shared/user/models';

@Injectable()
export class UpdateService {
  constructor(private _updateRepository: UserService) {}

  async updateUser(id: string, user: UserEditDto) {
    return this._updateRepository.update(id, user);
  }
}
