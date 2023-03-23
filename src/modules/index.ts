import { CoursesModule } from '@modules/courses/courses.module';

import { AvatarModule } from './avatars/avatar.module';
import { RegisterModule } from './register/register.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [CoursesModule, AvatarModule, RegisterModule, UpdateModule];
