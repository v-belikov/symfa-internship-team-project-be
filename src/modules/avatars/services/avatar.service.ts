import { Injectable } from '@nestjs/common';

import { UserService } from '@shared/user';

@Injectable()
export class AvatarService {
  constructor(private _avatarRepository: UserService) {}

  async getAvatars() {
    return this._avatarRepository._getAvatars();
  }
}
