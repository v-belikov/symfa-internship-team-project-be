import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserParent, UserStudent, UserTeacher } from '@entities/users';
import { UserRole } from '@models/enum';

import { UserDto } from '../models/user.dto';
import { UserEditDto } from '../models/user-edit.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserStudent)
    private _userStudentRepository: Repository<UserStudent>,
    @InjectRepository(UserTeacher)
    private _userTeacherRepository: Repository<UserTeacher>,
  ) {}

  async findOneById(id: string): Promise<UserParent | undefined> {
    const user = await this._userStudentRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.name',
        'user.surname',
        'user.phoneNumber',
        'user.email',
        'user.discription',
        'user.age',
        'user.dateOfBirth',
        'user.address',
        'user.role',
        'user.gender',
        'user.password',
      ])
      .where('user.id = :id', { id })
      .getOne();

    if (user) {
      return user;
    }

    throw new BadRequestException('Wrong email');
  }

  async getUserIdByData(repository: any): Promise<UserParent> {
    const queryBuilder = repository
      .createQueryBuilder('user')
      .addOrderBy('user.createdAt', 'DESC')
      .select(['user.userId']);

    return queryBuilder.getOne();
  }

  async create({ password: plainPassword, role, ...userData }: UserDto) {
    try {
      const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);
      const repository = role === UserRole.Teacher ? this._userTeacherRepository : this._userStudentRepository;

      const lastUser = await this.getUserIdByData(repository);

      const userId = await ('SC' +
        (role === UserRole.Teacher ? '2' : '1') +
        '00' +
        String(Number(lastUser.userId.slice(-2)) + 1));

      const user = await repository.create({ ...userData, userId, password });

      await repository.save(user);

      delete user.password;

      return user;
    } catch (erorr) {
      throw new BadRequestException('user with that email already exists');
    }
  }

  async update({ ...userData }: UserEditDto) {
    const updatedUser = await this.findOneById(userData.id);
    const repository =
      updatedUser.role === UserRole.Teacher ? this._userTeacherRepository : this._userStudentRepository;

    updatedUser.avatar = userData.avatarId;
    updatedUser.name = userData.name;
    updatedUser.surname = userData.surname;
    updatedUser.email = userData.email;
    updatedUser.phoneNumber = userData.phoneNumber;
    updatedUser.discription = userData.discription;
    updatedUser.age = userData.age;
    updatedUser.dateOfBirth = userData.dateOfBirth;
    updatedUser.address = userData.address;

    console.log(updatedUser);
    await repository.save({ ...updatedUser });

    return updatedUser;
  }
}
