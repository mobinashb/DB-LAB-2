import { Entity, Column, OneToMany } from 'typeorm';
import OrderEntity from './order.entity';
import UserEntity from './user.entity';

@Entity()
export default class EmployerEntity extends UserEntity {

    @Column({ length: 500, nullable: true })
    organization: string;

    @OneToMany( type => OrderEntity , order => order.employerId)
    orders: OrderEntity[];
}