import { Injectable } from '@nestjs/common';
import EmployerEntity from 'src/db/entity/employer.entity';
import FreelancerEntity from 'src/db/entity/freelancer.entity';
import OrderEntity from 'src/db/entity/order.entity';
import SkillEntity from 'src/db/entity/skill.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOrderDto from './dto/create-order.dto';
import CreateSkillDto from './dto/create-skill.dto';

@Injectable()
export class JobseekersService {
  async insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
    const employerEntity: EmployerEntity = EmployerEntity.create();
    const {name, organization} = employerDetails;
    employerEntity.name = name;
    if (organization)
      employerEntity.organization = organization;
    employerEntity.orders = [];
    await EmployerEntity.save(employerEntity);
    return employerEntity;
  }
  async insertOrder(orderDetails: CreateOrderDto): Promise<OrderEntity> {
    const newOrder = OrderEntity.create();
    const {employerId, budget, duration, description, category, minWorkExp} = orderDetails;
    newOrder.employerId = await EmployerEntity.findOne(employerId);
    newOrder.budget = budget;
    newOrder.duration = duration;
    newOrder.description = description;
    newOrder.category = category;
    newOrder.minWorkExp = minWorkExp;
    await OrderEntity.save(newOrder);
    return newOrder;
  }
  async insertFreelancer(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
    const freelancerEntity: FreelancerEntity = FreelancerEntity.create();
    const {name, cardNum} = freelancerDetails;
    freelancerEntity.name = name;
    freelancerEntity.cardNum = cardNum;
    freelancerEntity.skills = [];
    await FreelancerEntity.save(freelancerEntity);
    return freelancerEntity;
  }
  async insertSkill(skillDetails: CreateSkillDto): Promise<SkillEntity> {
    const newSkill = SkillEntity.create();
    const {freelancerId, name, level} = skillDetails;
    newSkill.freelancerId = await FreelancerEntity.findOne(freelancerId);
    newSkill.name = name;
    newSkill.level = level;
    await SkillEntity.save(newSkill);
    return newSkill;
  }
}
