import { IsInt, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {


    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    orderId : number
}

