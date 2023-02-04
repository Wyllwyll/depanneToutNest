import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';




export class UpdateOrderDto {
    @IsNotEmpty()
    @IsInt()
    id: number

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    city: string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    start_time: Date

    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    end_time: Date
}
