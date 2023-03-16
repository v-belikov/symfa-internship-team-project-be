import { Avatar } from '@entities/avatars';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { AVATAR_FIXTURES } from '../../data/avatars';

export class AvatarLoader extends AbstractLoader<Avatar> {
  entity: new () => Avatar = Avatar;

  data: Partial<Avatar>[] = AVATAR_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
