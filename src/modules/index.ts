import { DatabaseModule } from './database/database.module';
import { RegisterModule } from './register/register.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [DatabaseModule, RegisterModule, UpdateModule];
