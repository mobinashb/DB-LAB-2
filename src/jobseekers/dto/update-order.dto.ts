import { ApiProperty } from '@nestjs/swagger';
import CreateOrderDto from './create-order.dto';

export default class UpdateOrderDto extends CreateOrderDto {
    @ApiProperty({type: "number", description:"order id", maxLength: 500})
    readonly orderId: number;
}