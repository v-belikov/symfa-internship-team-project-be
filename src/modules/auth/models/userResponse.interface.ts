import { UserParent } from '@entities/users';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface UserResponseInterface {
  user: UserParent & { token: string };
}
