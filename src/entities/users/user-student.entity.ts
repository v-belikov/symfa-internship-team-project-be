import { ChildEntity, ManyToMany } from 'typeorm';

import { LessonsEntity } from '@entities/lessons';
import { UserRole } from '@models/enum';

import { UserParent } from './user.enity';

@ChildEntity(UserRole.Student)
export class UserStudent extends UserParent {
  @ManyToMany(() => LessonsEntity, (lessons: LessonsEntity) => lessons.studentsPass)
  passLessons: LessonsEntity[];
}
