import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserStudent, UserTeacher } from '@entities/users';

import { FilterUserDto } from '../models';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(UserStudent)
    private _userRepository: Repository<UserStudent>,
    @InjectRepository(UserTeacher)
    private _teacherRepository: Repository<UserTeacher>,
  ) {}

  async getAllStudents(data: FilterUserDto): Promise<UserStudent[]> {
    console.log(data);
    const student = this._userRepository
      .createQueryBuilder('student')
      .select([
        'student.id',
        'student.name',
        'student.surname',
        'student.userId',
        'student.gender',
        'student.age',
        'student.email',
      ])
      .leftJoinAndSelect('student.avatar', 'avatar');
    const students = await student.getMany();

    return students;
  }

  async getAllTeachers(data: FilterUserDto): Promise<UserTeacher[]> {
    console.log(data);
    const teacher = this._teacherRepository
      .createQueryBuilder('teacher')
      .select([
        'teacher.id',
        'teacher.name',
        'teacher.surname',
        'teacher.userId',
        'teacher.gender',
        'teacher.age',
        'teacher.email',
      ])
      .leftJoinAndSelect('teacher.avatar', 'avatar');
    const teachers = await teacher.getMany();

    return teachers;
  }
}
