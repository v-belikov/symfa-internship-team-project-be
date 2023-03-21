import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { CoursesLogoEntity } from '@entities/courses-logo';
import { LessonsEntity } from '@entities/lessons';
import { UserTeacher } from '@entities/users';

@Entity('courses')
export class CourseEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 400 })
  description: string;

  @ManyToOne(() => UserTeacher)
  @JoinTable()
  teacher: UserTeacher;

  @OneToMany(() => LessonsEntity, (lesson: LessonsEntity) => lesson.course)
  lessons: LessonsEntity[];

  @ManyToOne(() => CoursesLogoEntity)
  @JoinColumn()
  logo: CoursesLogoEntity;
}
