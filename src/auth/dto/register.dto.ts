export class RegisterDto {
  // @IsEmail()
  email: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(7)
  password: string;

  // @IsString()
  // @IsNotEmpty()
  firstName: string;

  // @IsString()
  // @IsNotEmpty()
  lastName: string;

  // @ApiProperty({
  //   description: 'Has to match a regular expression: /^\\+[1-9]\\d{1,14}$/',
  //   example: '+123123123123',
  // })
  // @IsString()
  // @IsNotEmpty()
  // @Matches(/^\+[1-9]\d{1,14}$/)
  // phoneNumber: string;
}