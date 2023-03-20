import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../common';

@Entity('avatar')
export class Avatar extends BaseEntity {
  @Column({ type: 'varchar', name: 'avatar_path', unique: true })
  avatarPath: string;
}
