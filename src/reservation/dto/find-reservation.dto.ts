import { IsInt, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class FindOneReservationDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    orderId : number
}