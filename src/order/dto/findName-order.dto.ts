import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class FindNameOrderDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name:string
}