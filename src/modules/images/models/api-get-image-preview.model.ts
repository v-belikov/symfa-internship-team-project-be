import { ApiProperty } from '@nestjs/swagger';

export class ApiGetImagePreviewModel {
  @ApiProperty({ example: '48866931-544d-4f54-9825-1fdee26d4225' })
  id: string;

  @ApiProperty({ example: 'images/products/image.webp' })
  path: string;

  @ApiProperty({ example: 1 })
  order: number;
}
