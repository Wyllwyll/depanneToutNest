import { IsInt, IsNotEmpty } from "class-validator";

export class CreateReservationDto {

    @IsInt()
    @IsNotEmpty()
    userId : number

    @IsInt()
    @IsNotEmpty()
    order : number
}

