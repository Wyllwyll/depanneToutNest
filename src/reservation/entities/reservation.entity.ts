import{Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne,
    OneToOne,BaseEntity
} from 'typeorm'
import { User } from "src/users/entities/user.entity";
import { Order } from "src/order/entities/order.entity";


@Entity()
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: number;

    @ManyToOne(() => User, (user) => user.id, {eager: true})
    user : User;

    @OneToOne(() => Order, (order) => order.reservation,
        {
            nullable: false
        })
    order: Order


}