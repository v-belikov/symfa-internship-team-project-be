import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CourseEntity } from '@entities/courses';

import { QueryGetCoursesDto } from '../models';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(CourseEntity) private _courseRepository: Repository<CourseEntity>) {}

  async getAllCourses({ teacher, sort }: QueryGetCoursesDto): Promise<CourseEntity[]> {
    const queryBuilder = this._courseRepository
      .createQueryBuilder('course')
      .select([
        'course.id',
        'course.title',
        'course.description',
        'course.logo',
        'teacher.id',
        'teacher.userId',
        'teacher.name',
        'teacher.surname',
        'avatar',
        'lessons',
        'logo',
      ])
      .innerJoin('course.teacher', 'teacher')
      .innerJoin('course.lessons', 'lessons')
      .innerJoin('teacher.avatar', 'avatar');

    if (teacher) {
      queryBuilder.where(`CONCAT(teacher.name," ",teacher.surname) = :fullName`, { fullName: teacher });
    }

    if (sort) {
      queryBuilder.orderBy('course.title', 'ASC');
    }

    return queryBuilder.getMany();
  }

  async getTeachers(): Promise<string[]> {
    const queryBuilder = await this._courseRepository
      .createQueryBuilder('course')
      .select(['teacher.id', 'teacher.userId', 'teacher.name', 'teacher.surname'])
      .innerJoin('course.teacher', 'teacher')
      .distinct(true)
      .getRawMany();

    return queryBuilder.map((elem: any) => {
      return elem.teacher_name + ' ' + elem.teacher_surname;
    });
  }
}
