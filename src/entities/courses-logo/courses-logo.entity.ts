import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('courses-logos')
export class CoursesLogoEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'Courses logo path', unique: true })
  logoPath: string;
}
