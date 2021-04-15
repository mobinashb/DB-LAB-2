import { ApiProperty } from '@nestjs/swagger';

export default class CreateOrderDto {
    @ApiProperty({type: "number", description:"order id", maxLength: 500})
    readonly orderId: number;
}