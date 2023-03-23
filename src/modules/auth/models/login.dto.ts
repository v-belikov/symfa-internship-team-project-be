// import { IsNotEmpty, IsStrongPassword } from 'class-validator';

export class LoginUserDto {
  // @IsNotEmpty()
  readonly email: string;

  // @IsNotEmpty()
  // @IsStrongPassword()
  readonly password: string;
}
