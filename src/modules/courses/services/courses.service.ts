import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CourseEntity } from '@entities/courses';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(CourseEntity) private _courseRepository: Repository<CourseEntity>) {}

  async getAllCourses() {
    const queryBuilder = this._courseRepository
      .createQueryBuilder('course')
      .select([
        'course.id',
        'course.title',
        'course.description',
        'teacher.id',
        'teacher.userId',
        'teacher.name',
        'teacher.surname',
        'lessons',
        'logo',
      ])
      .innerJoin('course.teacher', 'teacher')
      .innerJoin('course.lessons', 'lessons')
      .innerJoin('course.logo', 'logo');

    return queryBuilder.getMany();
  }
}
