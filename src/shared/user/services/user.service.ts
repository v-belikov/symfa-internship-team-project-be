import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { UserParent, UserStudent, UserTeacher } from '@entities/users';
import { UserRole } from '@models/enum';

import { UserDto, UserEditDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserParent)
    private _userRepository: Repository<UserParent>,
    @InjectRepository(UserStudent)
    private _userStudentRepository: Repository<UserStudent>,
    @InjectRepository(UserTeacher)
    private _userTeacherRepository: Repository<UserTeacher>,
  ) {}

  async create({ password: plainPassword, role, email, ...userData }: UserDto) {
    try {
      const password = await bcrypt.hash(plainPassword, +Config.get.hashSalt);
      const repository = this._getRepository(role);

      const lastUserId = await this._getLastUserId(repository);
      const userId = 'SC' + `${+lastUserId.slice(2) + 1}`;

      const user = await repository.create({ ...userData, userId, email, password });

      await repository.save(user);

      delete user.password;

      return user;
    } catch (erorr) {
      throw new BadRequestException('user with that email already exists');
    }
  }

  async update(id: string, { avatarId, ...userData }: UserEditDto) {
    await this._userRepository.update(id, { ...userData, avatar: { id: avatarId } });
  }

  private _getRepository(role: UserRole): Repository<UserParent> {
    return role === UserRole.Teacher ? this._userTeacherRepository : this._userStudentRepository;
  }

  private async _getLastUserId(repository: Repository<UserParent>): Promise<string> {
    const queryBuilder = repository
      .createQueryBuilder('user')
      .addOrderBy('user.createdAt', 'DESC')
      .select(['user.userId']);
    const { userId } = await queryBuilder.getOne();

    return userId;
  }
}
