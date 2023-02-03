import { IsInt, IsNotEmpty } from "class-validator";

export class FindOneReservationDto {

    @IsInt()
    @IsNotEmpty()
    orderId : number
}