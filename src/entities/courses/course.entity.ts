import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { LessonsEntity } from '@entities/lessons';
import { UserTeacher } from '@entities/users';

@Entity('courses')
export class CourseEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 400 })
  description: string;

  @Column({ type: 'varchar', name: 'logo' })
  logo: string;

  @ManyToOne(() => UserTeacher)
  @JoinColumn()
  teacher: UserTeacher;

  @OneToMany(() => LessonsEntity, (lesson: LessonsEntity) => lesson.course)
  lessons: LessonsEntity[];
}
