import { IsInt } from "class-validator";
import { IsBoolean, IsDate, IsNotEmpty } from "class-validator/types/decorator/decorators";

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
