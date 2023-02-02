import { IsBoolean, IsDate, IsInt, IsNotEmpty } from "class-validator";

export class CreateOrderDto {


    @IsNotEmpty()
    name: string


    @IsNotEmpty()
    price: number


    @IsNotEmpty()
    city: string


    @IsDate()
    start_time: Date


    @IsDate()
    end_time: Date


    @IsBoolean()
    reserved: boolean


    @IsInt()
    ownerId:number

}
