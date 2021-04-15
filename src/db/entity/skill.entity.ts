import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class SkillEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column()
    level: number;

    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.skills, { cascade: true, onDelete: 'CASCADE' })
    freelancer: FreelancerEntity;
}