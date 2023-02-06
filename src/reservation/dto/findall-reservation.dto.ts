import { IsInt, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class FindAllReservationDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId : number
}

