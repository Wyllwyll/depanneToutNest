import { IsInt, IsNotEmpty } from "class-validator";

export class FindAllReservationDto {

    @IsInt()
    @IsNotEmpty()
    userId : number
}

