import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { UserGender, UserRole } from '@models/enum';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '5780ebef-8760-4be2-b360-13cf7ee20782' })
  avatarId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Danik' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Moskaluk' })
  surname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'moskaluk@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '+375298905765' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Java developer.' })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ example: 18 })
  age: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: UserGender.Male })
  gender: UserGender;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @ApiProperty({ example: new Date('2004-07-24') })
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Bratskaya 2' })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: UserRole.Student })
  role: UserRole;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'passDanik' })
  password: string;
}
