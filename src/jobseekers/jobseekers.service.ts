import { Injectable } from '@nestjs/common';
import EmployerEntity from 'src/db/entity/employer.entity';
import FreelancerEntity from 'src/db/entity/freelancer.entity';
import OrderEntity from 'src/db/entity/order.entity';
import SkillEntity from 'src/db/entity/skill.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOrderDto from './dto/create-order.dto';
import CreateSkillDto from './dto/create-skill.dto';
import UpdateEmployerDto from './dto/update-employer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOrderDto from './dto/update-order.dto';
import UpdateSkillDto from './dto/update-skill.dto';

@Injectable()
export class JobseekersService {
  async insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
    const newEmployer: EmployerEntity = EmployerEntity.create();
    const {name, organization} = employerDetails;
    newEmployer.name = name;
    if (organization)
      newEmployer.organization = organization;
    newEmployer.orders = [];
    await EmployerEntity.save(newEmployer);
    return newEmployer;
  }
  async updateEmployer(employerDetails: UpdateEmployerDto): Promise<EmployerEntity> {
    const {id, name, organization} = employerDetails;
    const employer = await EmployerEntity.findOne(id);
    employer.name = name;
    if (organization)
      employer.organization = organization;
    await employer.save();
    return employer;
  }
  async deleteEmployer(id: number): Promise<EmployerEntity> {
    const employer = await EmployerEntity.findOne(id);
    await employer.remove();
    return employer;
  }
  async insertOrder(orderDetails: CreateOrderDto): Promise<OrderEntity> {
    const newOrder = OrderEntity.create();
    const {employerId, budget, duration, description, category, minWorkExp} = orderDetails;
    newOrder.employer = await EmployerEntity.findOne(employerId);
    newOrder.budget = budget;
    newOrder.duration = duration;
    newOrder.description = description;
    newOrder.category = category;
    newOrder.minWorkExp = minWorkExp;
    await OrderEntity.save(newOrder);
    return newOrder;
  }
  async updateOrder(orderDetails: UpdateOrderDto): Promise<OrderEntity> {
    const {orderId, employerId, budget, duration, description, category, minWorkExp} = orderDetails;
    const order = await OrderEntity.findOne(orderId);
    order.employer = await EmployerEntity.findOne(employerId);
    order.budget = budget;
    order.duration = duration;
    order.description = description;
    order.category = category;
    order.minWorkExp = minWorkExp;
    await order.save();
    return order;
  }
  async deleteOrder(orderId: number): Promise<OrderEntity> {
    const order = await OrderEntity.findOne(orderId);
    await order.remove();
    return order;
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
  async updateFreelancer(FreelancerDetails: UpdateFreelancerDto): Promise<FreelancerEntity> {
    const {id, name, cardNum} = FreelancerDetails;
    const freelancer = await FreelancerEntity.findOne(id);
    freelancer.name = name;
    freelancer.cardNum = cardNum;
    await freelancer.save();
    return freelancer;
  }
  async deleteFreelancer(id: number): Promise<FreelancerEntity> {
    const freelancer = await FreelancerEntity.findOne(id);
    await freelancer.remove();
    return freelancer;
  }
  async insertSkill(skillDetails: CreateSkillDto): Promise<SkillEntity> {
    const newSkill = SkillEntity.create();
    const {freelancerId, name, level} = skillDetails;
    newSkill.freelancer = await FreelancerEntity.findOne(freelancerId);
    newSkill.name = name;
    newSkill.level = level;
    await SkillEntity.save(newSkill);
    return newSkill;
  }
  async updateSkill(skillDetails: UpdateSkillDto): Promise<SkillEntity> {
    const {skillId, freelancerId, name, level} = skillDetails;
    const skill = await SkillEntity.findOne(skillId);
    skill.freelancer = await FreelancerEntity.findOne(freelancerId);
    skill.name = name;
    skill.level = level;
    await skill.save();
    return skill;
  }
  async deleteSkill(skillId: number): Promise<SkillEntity> {
    const skill = await SkillEntity.findOne(skillId);
    await skill.remove();
    return skill;
  }
}
