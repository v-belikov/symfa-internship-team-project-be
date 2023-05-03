import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { UserParent } from '@entities/users';

import { BaseEntity } from '../common';

@Entity('one_time_password')
export class OneTimePassword extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'otp',
    unique: true,
    length: 16,
  })
  otp: string;

  @OneToOne(() => UserParent)
  @JoinColumn()
  user: UserParent;
}
