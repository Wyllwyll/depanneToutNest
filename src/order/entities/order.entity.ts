import { Reservation } from "src/reservation/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('orders')
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number



    @Column({ nullable: false })
    name: string



    @Column({ nullable: false })
    price: number



    @Column({ nullable: false })
    city: string



    @Column({ type: "timestamptz", nullable: false })
    start_time: Date



    @Column({ type: "timestamptz", nullable: false })
    end_time: Date



    @Column({ default: false })
    reserved: boolean



    @ManyToOne(() => User, (user) => user.orders, {
        nullable: false
    })
    user: User


    @OneToOne(() => Reservation, (reservation) => reservation.order,)
    reservation: Reservation


}
