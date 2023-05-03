import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { CourseEntity } from '@entities/courses';
import { UserStudent } from '@entities/users';

@Entity('lessons')
export class LessonsEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'int', name: 'duration' })
  duration: number;

  @Column({ type: 'varchar' })
  materialPath: string;

  @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.lessons)
  course: CourseEntity;

  @ManyToMany(() => UserStudent, (student: UserStudent) => student.passLessons)
  @JoinTable()
  studentsPass: UserStudent[];
}
