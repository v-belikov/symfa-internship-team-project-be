import { Config } from '@core/config';

import * as bcrypt from 'bcrypt';

export const deafultPassword = bcrypt.hashSync('defaultPass', +Config.get.hashSalt);
