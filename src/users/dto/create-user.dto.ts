import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username : string

    @IsNotEmpty()
    @IsEmail()
    mail : string

    @IsNotEmpty()
    @IsString()
    password : string

    @IsNotEmpty()
    @IsString()
    password_verif : string

    @IsNotEmpty()
    @IsString()
    adress_line1 : string
    
    @IsString()
    adress_line2 : string

    @IsString()
    adress_line3 : string

    @IsNotEmpty()
    @IsString()
    zipCode : string

    @IsNotEmpty()
    @IsString()
    city : string


}
