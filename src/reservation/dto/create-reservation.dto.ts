import { IsInt, IsNotEmpty } from "class-validator";

export class CreateReservationDto {

    @IsInt()
    @IsNotEmpty()
    id : number

    @IsInt()
    @IsNotEmpty()
    numero : number
}

