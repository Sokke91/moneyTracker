import { Contract } from "src/contracts/entities/contract.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    // Relations

    @ManyToOne(() => User, (user) => user.accounts)
    user: User

    @OneToMany( () => Contract, (contract)=> contract.account)
    contracts: Contract[]
}
