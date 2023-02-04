import{Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne,
    OneToOne,BaseEntity, JoinColumn
} from 'typeorm'
import { User } from "src/users/entities/user.entity";
import { Order } from "src/order/entities/order.entity";


@Entity()
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    numero: number;

    @ManyToOne(() => User, (user) => user.reservations, {eager: true})
    user : User;

    @OneToOne(() => Order, {  nullable: false  })
    @JoinColumn()
    order: Order


}