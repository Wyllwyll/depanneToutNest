import { IsNotEmpty, IsString } from "class-validator";

export class FindNameOrderDto {

    @IsNotEmpty()
    @IsString()
    name:string
}