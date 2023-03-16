import { UserParent } from './user.enity';
import { UserStudent } from './user-student.entity';
import { UserTeacher } from './user-teacher.entity';

export * from './user.enity';
export * from './user-student.entity';
export * from './user-teacher.entity';

export const USER_ENTITIES = [UserParent, UserStudent, UserTeacher];
