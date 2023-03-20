import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('lessons')
export class LessonsEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'title', unique: true })
  title: string;

  @Column({ type: 'int', name: 'duration' })
  duration: number;

  @Column({ type: 'varchar', unique: true })
  materialPath: string;
}
