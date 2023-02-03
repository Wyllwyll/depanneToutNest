import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';




export class UpdateOrderDto {
    @IsNotEmpty()
    @IsInt()
    id :number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsNumber()
    price: number


    @IsNotEmpty()
    @IsDateString()
    start_time: Date

    @IsNotEmpty()
    @IsDateString()
    end_time: Date
}
