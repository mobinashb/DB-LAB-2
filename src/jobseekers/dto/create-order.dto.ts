import { ApiProperty } from '@nestjs/swagger';

export default class CreateOrderDto {
    @ApiProperty({type: "number", description:"order id", maxLength: 500})
    readonly orderId: number;

    @ApiProperty({type: "number", description:"the budget for the order"})
    readonly budget: number;

    @ApiProperty({type: "number", description:"the duration of the order in days"})
    readonly duration: number;

    @ApiProperty({type: "string", description:"order description"})
    readonly description: string;

    @ApiProperty({type: "string", description:"order category"})
    readonly category: string;

    @ApiProperty({type: "number", description:"the minimum working experience needed for the freelancer in years"})
    readonly minWorkExp: number;

}