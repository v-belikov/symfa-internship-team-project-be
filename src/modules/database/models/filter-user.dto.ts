import { ApiProperty } from '@nestjs/swagger';

// import { IsNotEmpty } from 'class-validator';
import { Gender, SortOrder } from './filter.enum';

export class FilterUserDto {
  @ApiProperty({ example: 'name' })
  // @IsNotEmpty()
  readonly sort: string;

  @ApiProperty({ example: 'Increase' })
  // @IsNotEmpty()
  readonly order: SortOrder;

  @ApiProperty({ example: 'Male' })
  // @IsNotEmpty()
  readonly gender: Gender;
}
