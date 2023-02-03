import { IsBoolean, IsDate, IsDateString, IsInt, IsNotEmpty } from "class-validator";

export class CreateOrderDto {


    @IsNotEmpty()
    name: string


    @IsNotEmpty()
    price: number


    @IsNotEmpty()
    city: string


    @IsDateString()
    start_time: Date


    @IsDateString()
    end_time: Date

}
