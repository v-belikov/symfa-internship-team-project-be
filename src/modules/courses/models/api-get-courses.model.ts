import { ApiProperty } from '@nestjs/swagger';

import { LessonsEntity } from '@entities/lessons';
import { UserTeacher } from '@entities/users';

export class ApiGetCoursesModel {
  @ApiProperty({ example: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd' })
  id: string;

  @ApiProperty({ example: 'Title' })
  title: string;

  @ApiProperty({
    example: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  })
  description: string;

  @ApiProperty({
    example: {
      id: '53ecdcb5-8abb-413d-b6a2-6ec1fd6947ca',
      userId: 'SC20001',
      name: 'Maria',
      surname: 'Smirnova',
    },
  })
  teacher: UserTeacher;

  @ApiProperty({
    example: [
      {
        id: 'bf8f553f-4769-4e5c-b474-4dacc08aacab',
        title: 'Web-design',
        duration: 2,
        materialPath: './lessons-material/material1.mp4',
      },
      {
        id: 'f51ec145-f28c-4b3d-ab6a-c39b9d96f815',
        title: 'Color theory',
        duration: 1,
        materialPath: './lessons-material/material2.mp4',
      },
    ],
  })
  lessons: LessonsEntity;

  @ApiProperty({
    example: {
      logo: '/courses-logos/logo1.jpg',
    },
  })
  logo: string;
}
