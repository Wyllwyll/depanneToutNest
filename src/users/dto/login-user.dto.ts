import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {

    @IsNotEmpty()
    @IsEmail()
    mail : string

    @IsNotEmpty()
    @IsString()
    password : string

}
