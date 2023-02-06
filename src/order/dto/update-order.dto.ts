import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';




export class UpdateOrderDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    id: number

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    city: string

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    start_time: Date

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsDateString()
    end_time: Date
}
