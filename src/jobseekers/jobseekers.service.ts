import { Injectable } from '@nestjs/common';
import EmployerEntity from 'src/db/entity/employer.entity';
import OrderEntity from 'src/db/entity/order.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateOrderDto from './dto/create-order.dto';

@Injectable()
export class JobseekersService {
  async insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
    const employerEntity: EmployerEntity = EmployerEntity.create();
    const {id, name, organization} = employerDetails;
    employerEntity.id = id;
    employerEntity.name = name;
    if (organization)
      employerEntity.organization = organization;
    employerEntity.orders = [];
    await EmployerEntity.save(employerEntity);
    return employerEntity;
  }
  async insertOrder(orderDetails: CreateOrderDto, employerId: number): Promise<OrderEntity> {
    const newOrder = OrderEntity.create();
    const {orderId, budget, duration, description, category, minWorkExp} = orderDetails;
    newOrder.id = orderId;
    newOrder.employerId = await EmployerEntity.findOne(employerId);
    newOrder.budget = budget;
    newOrder.duration = duration;
    newOrder.description = description;
    newOrder.category = category;
    newOrder.minWorkExp = minWorkExp;
    await OrderEntity.save(newOrder);
    return newOrder;
  }
}
