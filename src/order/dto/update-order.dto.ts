import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto {
    @IsNotEmpty()
    name: string
}
