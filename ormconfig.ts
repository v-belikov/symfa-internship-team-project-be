import { join } from 'path';
import { DataSource } from 'typeorm';

import { Config } from '@core/config';

export default new DataSource({
  ...Config.get.typeORMOptions,
  migrations: [join(__dirname, 'migrations/*-Migration{.ts,.js}')],
});
