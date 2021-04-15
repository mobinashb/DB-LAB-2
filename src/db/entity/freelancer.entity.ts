import { Entity, Column, OneToMany } from 'typeorm';
import SkillEntity from './skill.entity';
import UserEntity from './user.entity';

@Entity()
export default class FreelancerEntity extends UserEntity {

    @Column({ length: 16 })
    cardNum: string;

    @OneToMany( type => SkillEntity , skill => skill.freelancerId)
    skills: SkillEntity[];
}