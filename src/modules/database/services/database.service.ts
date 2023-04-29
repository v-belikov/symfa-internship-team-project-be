import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserStudent, UserTeacher } from '@entities/users';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(UserStudent)
    private _userRepository: Repository<UserStudent>,
    @InjectRepository(UserTeacher)
    private _teacherRepository: Repository<UserTeacher>,
  ) {}

  async getAllStudents(): Promise<UserStudent[]> {
    const student = this._userRepository.createQueryBuilder('student').leftJoinAndSelect('student.avatar', 'avatar');
    const students = await student.getMany();

    return students;
  }

  async getAllTeachers(): Promise<UserTeacher[]> {
    const teacher = this._teacherRepository.createQueryBuilder('teacher').leftJoinAndSelect('teacher.avatar', 'avatar');
    const teachers = await teacher.getMany();

    return teachers;
  }
}
