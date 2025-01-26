import { IsEmail, IsString, IsInt, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @IsEmail()
  email: string;

  @Matches(/^\d{11}$/, {
    message: 'CPF must be a valid 11-digit number',
  })
  cpf: string;

  @IsInt()
  type_user: number;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  phone: string;
}
