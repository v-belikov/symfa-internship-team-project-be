import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { CoursesLogoEntity } from '@entities/courses-logo';
import { LessonsEntity } from '@entities/lessons';

@Entity('courses')
export class CourseEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 400 })
  description: string;

  @Column({ type: 'varchar' })
  teacher: string;

  @ManyToMany(() => LessonsEntity)
  @JoinColumn()
  lessons: LessonsEntity[];

  @ManyToOne(() => CoursesLogoEntity)
  @JoinColumn()
  logo: CoursesLogoEntity;
}
