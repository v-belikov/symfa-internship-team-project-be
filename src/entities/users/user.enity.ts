import { Column, Entity, JoinColumn, ManyToOne, TableInheritance } from 'typeorm';

import { Avatar } from '@entities/avatars';
import { UserGender, UserRole } from '@models/enum';

import { BaseEntity } from '../common';

@Entity('user')
@TableInheritance({
  column: { type: 'enum', enum: UserRole, name: 'role' },
})
export class UserParent extends BaseEntity {
  @Column({ type: 'varchar', name: 'user_id', unique: true })
  userId: string;

  @ManyToOne(() => Avatar)
  @JoinColumn()
  avatar: Avatar;

  @Column({
    type: 'varchar',
    name: 'name',
    length: 20,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'surname',
    length: 20,
  })
  surname: string;

  @Column({
    type: 'varchar',
    name: 'email',
    length: 40,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    name: 'phone_number',
    length: 40,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    name: 'discription',
    length: 255,
  })
  discription: string;

  @Column({
    type: 'tinyint',
    name: 'age',
  })
  age: number;

  @Column({
    type: 'enum',
    enum: UserGender,
    name: 'gender',
  })
  gender: UserGender;

  @Column({
    type: 'date',
    name: 'date_of_birth',
  })
  dateOfBirth: Date;

  @Column({
    type: 'varchar',
    name: 'address',
    length: 255,
  })
  address: string;

  @Column({ type: 'enum', name: 'user_role', enum: UserRole })
  role: UserRole;

  @Column({ type: 'varchar', name: 'password', length: 72 })
  password: string;
}
