import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { CourseEntity } from '@entities/courses';

@Entity('lessons')
export class LessonsEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'int', name: 'duration' })
  duration: number;

  @Column({ type: 'varchar', unique: true })
  materialPath: string;

  @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.lessons)
  course: CourseEntity;
}
