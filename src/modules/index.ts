import { CoursesModule } from '@modules/courses/courses.module';

import { RegisterModule } from './register/register.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [CoursesModule, RegisterModule, UpdateModule];
