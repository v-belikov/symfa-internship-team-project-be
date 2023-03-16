import { DeepPartial } from 'typeorm';

import { User } from '@entities/users';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { USER_FIXTURES } from '../../data/users';

export class UserLoader extends AbstractLoader<User> {
  entity: new () => User = User;

  data: DeepPartial<User>[] = USER_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
