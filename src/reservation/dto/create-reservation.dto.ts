import { IsInt, IsNotEmpty } from "class-validator";

export class CreateReservationDto {

    @IsInt()
    @IsNotEmpty()
    userid : number

    @IsInt()
    @IsNotEmpty()
    order : number
}

