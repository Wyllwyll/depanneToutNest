import { timestamp } from "rxjs";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";


@Entity('orders')
export class Order extends BaseEntity {

    @PrimaryColumn()
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



    @ManyToOne(() => User, (user) => user.order, {
        nullable: false
    })
    user: User


    @OneToOne(() => Reservation, (reservation) => reservation.order,
        {
            nullable: false
        })
    reservation: Reservation


}
