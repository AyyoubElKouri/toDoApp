import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Represents a user entity in the database.
 * Stores basic user authentication and identification information.
 */
@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

}
