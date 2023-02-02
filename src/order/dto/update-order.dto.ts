import { IsNotEmpty } from 'class-validator';


export class UpdateOrderDto {
    @IsNotEmpty()
    name: string
    price:number
    city:string
}
