import { Order } from "src/order/entities/order.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    
    @Column()
    mail : string

    
    @Column({select : false})
    password : string

    
    @Column()
    adress_line1 : string

    
    @Column()
    adress_line2 : string

    
    @Column()
    adress_line3 : string

    
    @Column()
    zipCode : string

    @Column()
    city: string

    @OneToMany(() => Order, (order) => order.user)
    orders : Order[]

    @OneToMany(() => Reservation, (resa) => resa.user)
    reservations : Reservation[]



}
