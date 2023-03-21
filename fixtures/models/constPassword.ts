import { Config } from '@core/config';

import * as bcrypt from 'bcrypt';

export const defaultPassword = bcrypt.hashSync('defaultPass', +Config.get.hashSalt);
