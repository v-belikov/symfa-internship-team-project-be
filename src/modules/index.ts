import { CoursesModule } from '@modules/courses/courses.module';

import { AuthModule } from './auth/auth.module';
import { AvatarModule } from './avatars/avatar.module';
import { DatabasesModule } from './database/database.module';
import { RegisterModule } from './register/register.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [CoursesModule, AvatarModule, AuthModule, RegisterModule, UpdateModule, DatabasesModule];
