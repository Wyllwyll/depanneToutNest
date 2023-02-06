import { IsDateString , IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDto {


    @ApiProperty()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    price: number

    @ApiProperty()
    @IsNotEmpty()
    city: string

    @ApiProperty()
    @IsDateString()
    start_time: Date

    @ApiProperty()
    @IsDateString()
    end_time: Date

}
