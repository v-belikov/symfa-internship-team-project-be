import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryGetCoursesDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ name: 'teacher' })
  teacher?: string;
}
