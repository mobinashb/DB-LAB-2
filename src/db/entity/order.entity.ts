import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import EmployerEntity from './employer.entity';

@Entity()
export default class OrderEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    description: string;

    @Column({ length: 500 })
    category: string;

    @Column()
    duration: number;

    @Column()
    budget: number;

    @Column()
    minWorkExp: number;

    @ManyToOne(type => EmployerEntity, employer => employer.orders)
    employerId: EmployerEntity;
}