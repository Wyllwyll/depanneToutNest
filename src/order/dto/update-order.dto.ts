import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';




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
    @IsDate()
    start_time: Date

    @IsNotEmpty()
    @IsDate()
    end_time: Date
}
