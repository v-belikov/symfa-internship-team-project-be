import { DeepPartial } from 'typeorm';

import { CourseEntity } from '@entities/courses';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { COURSES_FIXTURES } from '@fixtures/dev/data/courses';
import { EnvironmentType } from '@models/enum';

export class CoursesLoader extends AbstractLoader<CourseEntity> {
  entity: new () => CourseEntity = CourseEntity;

  data: DeepPartial<CourseEntity>[] = COURSES_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
