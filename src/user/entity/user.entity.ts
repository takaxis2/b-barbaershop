import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user') //테이블 명
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    userId: string;

    @Column()
    userPassword: string;

}