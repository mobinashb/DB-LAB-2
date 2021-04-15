import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOrderDto from './dto/create-order.dto';
import CreateSkillDto from './dto/create-skill.dto';
import UpdateEmployerDto from './dto/update-employer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOrderDto from './dto/update-order.dto';
import UpdateSkillDto from './dto/update-skill.dto';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
  constructor(private readonly jobseekersService: JobseekersService) {}

  @ApiResponse({ status: 200, description: "creats a new employer" })
  @Post('employers')
  postEmployer( @Body() emp: CreateEmployerDto) {
    return this.jobseekersService.insertEmployer(emp);
  }

  @ApiResponse({ status: 200, description: "updates an existing employer" })
  @Put('employers')
  putEmployer( @Body() emp: UpdateEmployerDto) {
    return this.jobseekersService.updateEmployer(emp);
  }

  @ApiResponse({ status: 200, description: "creates a new freelancer" })
  @Post('freelancers')
  postFreelancer( @Body() frl: CreateFreelancerDto) {
    return this.jobseekersService.insertFreelancer(frl);
  }

  @ApiResponse({ status: 200, description: "updates an existing freelancer" })
  @Put('freelancers')
  putFreelancer( @Body() frl: UpdateFreelancerDto) {
    return this.jobseekersService.updateFreelancer(frl);
  }

  @ApiResponse({ status: 200, description: "creates a new order associated with the employer having 'employerId'" })
  @Post('employers/orders')
  postOrder( @Body() order: CreateOrderDto) {
    return this.jobseekersService.insertOrder(order);
  }

  @ApiResponse({ status: 200, description: "updates an existing order" })
  @Put('employers/orders')
  putOrder( @Body() order: UpdateOrderDto) {
    return this.jobseekersService.updateOrder(order);
  }

  @ApiResponse({ status: 200, description: "creates a new skill associated with the freelancer having 'freelancerId'" })
  @Post('freelancers/skills')
  postSkill( @Body() skill: CreateSkillDto) {
    return this.jobseekersService.insertSkill(skill);
  }

  @ApiResponse({ status: 200, description: "updates an existing skill" })
  @Put('freelancers/skills')
  putSkill( @Body() skill: UpdateSkillDto) {
    return this.jobseekersService.updateSkill(skill);
  }
}
