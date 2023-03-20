import { ChildEntity } from 'typeorm';

import { UserRole } from '@models/enum';

import { UserParent } from './user.enity';

@ChildEntity(UserRole.Student)
export class UserStudent extends UserParent {}
