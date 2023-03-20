import { DeepPartial } from 'typeorm';

import { UserTeacher } from '@entities/users';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { TEACHER_FIXTURES } from '../../data/users';

export class UserTeacherLoader extends AbstractLoader<UserTeacher> {
  entity: new () => UserTeacher = UserTeacher;

  data: DeepPartial<UserTeacher>[] = TEACHER_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
