import { DeepPartial } from 'typeorm';

import { CoursesLogoEntity } from '@entities/courses-logo';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { COURSES_LOGOS_FIXTURES } from '@fixtures/dev/data/courses-logos';
import { EnvironmentType } from '@models/enum';

export class CoursesLogosLoader extends AbstractLoader<CoursesLogoEntity> {
  entity: new () => CoursesLogoEntity = CoursesLogoEntity;

  data: DeepPartial<CoursesLogoEntity>[] = COURSES_LOGOS_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
