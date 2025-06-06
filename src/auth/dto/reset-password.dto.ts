import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordInput {
  @IsString()
  @IsNotEmpty()
  token: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}
