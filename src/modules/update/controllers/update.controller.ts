import { Body, HttpStatus, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserEditDto } from '@shared/user/models';

import { UpdateController as Controller } from '../decorators';
import { UpdateService } from '../services';

@Controller()
export class UpdateController {
  constructor(private _updateService: UpdateService) {}

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() user: UserEditDto) {
    return this._updateService.updateUser(id, user);
  }
}
