import { ApiProperty } from '@nestjs/swagger';

import { CoursesLogoEntity } from '@entities/courses-logo';
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
      email: 'smirnova@gmail.com',
      phoneNumber: '+375299088774',
      description: 'Loves painting and novels.',
      age: 43,
      gender: 'female',
      dateOfBirth: '1980-01-02',
      address: 'Bolotnaya 28',
      role: 'teacher',
      password: '$2b$10$7VBHAx7OnjR34x1XLcd6F.nacfKRei/N6G47sdEXckbZW8q1reUbK',
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
  @ApiProperty({
    example: {
      id: 'bee4c87a-0745-47e5-b05a-566a14144713',
      logoPath: '/courses-logos/logo1.jpg',
    },
  })
  logo: CoursesLogoEntity;
}
