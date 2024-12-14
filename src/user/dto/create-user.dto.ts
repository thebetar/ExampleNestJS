import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@Length(4, 64)
	readonly username: string;

	@IsNotEmpty()
	@IsEmail()
	readonly email: string;

	@IsNotEmpty()
	@Length(8, 20)
	@Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
		message: 'password too weak',
	})
	readonly password: string;
}
