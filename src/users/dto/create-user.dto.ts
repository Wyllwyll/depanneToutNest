import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username : string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    mail : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password_verif : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    adress_line1 : string
    
    @ApiProperty()
    @IsString()
    adress_line2 : string

    @ApiProperty()
    @IsString()
    adress_line3 : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    zipCode : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    city : string


}
