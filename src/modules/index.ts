import { CoursesModule } from '@modules/courses/courses.module';

import { AuthModule } from './auth/auth.module';
import { AvatarModule } from './avatars/avatar.module';
import { RegisterModule } from './register/register.module';
import { RestorePasswordModule } from './restore-password/restore-password.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [
  CoursesModule,
  AvatarModule,
  AuthModule,
  RegisterModule,
  UpdateModule,
  RestorePasswordModule,
];
