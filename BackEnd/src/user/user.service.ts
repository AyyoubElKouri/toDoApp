import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    /**
     * Creates a new user in the database
     * @param userData - The data required to create a new user
     * @returns The newly created user entity
     */
    signup(userData: any) {
        // Create a new user
        const newUser = this.userRepository.create(userData);

        // Save the user to the database
        return this.userRepository.save(newUser);
    }

    /**
     * Authenticates a user by email and password
     * @param userData - The login credentials containing email and password
     * @returns The authenticated user entity or an error message if credentials are invalid
     */
    async login(userData: any) {
        // Find the user by email
        const user = await this.userRepository.findOne({
            where: { email: userData.email },
        });

        // Check if the user exists and the password is correct

        if (user && user.password === userData.password) {
            return user;
        } else {
            return {
                message: 'Invalid credentials',
            };
        }
    }
}
