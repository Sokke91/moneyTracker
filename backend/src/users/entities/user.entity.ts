import { Account } from "src/accounts/entities/account.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    username: string
    
    @Column({nullable: false})
    password: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    // Relations

    @OneToMany( () => Account, (account) =>account.user)
    accounts: Account[]
}
