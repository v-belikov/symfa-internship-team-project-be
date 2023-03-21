import { Body, Put } from '@nestjs/common';

import { UserEditDto } from '@shared/user/models/user-edit.dto';

import { Update_Controller as Controller } from '../decorators';
import { UpdateService } from '../services';

@Controller()
export class UpdateController {
  constructor(private _updateService: UpdateService) {}

  @Put()
  async update(@Body() user: UserEditDto) {
    return this._updateService.updateUser(user);
  }
}
