import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';




export class UpdateOrderDto {
    @IsNotEmpty()
    @IsString()
    name: string
    city: string

    @IsNotEmpty()
    @IsNumber()
    price: number


    @IsNotEmpty()
    @IsDate()
    start_time: Date
    end_time: Date
}
