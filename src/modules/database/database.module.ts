import { Module } from '@nestjs/common';

import { DatabaseService } from './services/database.service';
import { DATABASE_CONTROLLER } from './controllers';

@Module({
  exports: [DatabaseService],
  controllers: [...DATABASE_CONTROLLER],
  providers: [DatabaseService],
})
export class DatabasesModule {}
