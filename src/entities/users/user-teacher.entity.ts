import { ChildEntity } from 'typeorm';

import { UserRole } from '@models/enum';

import { UserParent } from './user.enity';

@ChildEntity(UserRole.Teacher)
export class UserTeacher extends UserParent {}
