import { DeepPartial } from 'typeorm';

import { LessonsEntity } from '@entities/lessons';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { LESSONS_FIXTURES } from '@fixtures/dev/data/lessons';
import { EnvironmentType } from '@models/enum';

export class LessonsLoader extends AbstractLoader<LessonsEntity> {
  entity: new () => LessonsEntity = LessonsEntity;

  data: DeepPartial<LessonsEntity>[] = LESSONS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
