import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'test@mail.ru', description: 'Unique email' })
    @IsString({ message: "Email must to be a string" })
    @IsEmail({}, { message: 'Enter a valid email' })
    readonly email: string;

    @ApiProperty({ example: 'test@mail.ru', description: 'Unique email' })
    @IsString({ message: "firstName must to be a string" })
    readonly firstName: string;

    @ApiProperty({ example: 'test@mail.ru', description: 'Unique email' })
    @IsString({ message: "lastName must to be a string" })
    readonly lastName: string;

    @ApiProperty({ example: 'password', description: 'User Password' })
    @IsString({ message: "Password must to be a string" })
    @Length(8, 16, { message: 'Password must to be an over or equal 8 symbols but not more than 16 symbols.' })
    readonly password: string;
}