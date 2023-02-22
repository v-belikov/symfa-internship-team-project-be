import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { ChangeOrderDto } from './change-order.dto';

export class UploadImageDto extends ChangeOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'images/products/path' })
  path: string;
}
