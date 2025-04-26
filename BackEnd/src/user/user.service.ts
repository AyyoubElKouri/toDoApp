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

    signup(userData: any) {
        // Create a new user
        const newUser = this.userRepository.create(userData);

        // Save the user to the database
        return this.userRepository.save(newUser);
    }
}
