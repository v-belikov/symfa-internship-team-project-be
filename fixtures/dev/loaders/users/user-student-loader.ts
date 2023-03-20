import { DeepPartial } from 'typeorm';

import { UserStudent } from '@entities/users';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { STUDENT_FIXTURES } from '../../data/users';

export class UserStudentLoader extends AbstractLoader<UserStudent> {
  entity: new () => UserStudent = UserStudent;

  data: DeepPartial<UserStudent>[] = STUDENT_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
