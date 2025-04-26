import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/signup')
    signup(@Body() userData: any) {
        return this.userService.signup(userData);
    }

    @Post('/login')
    login(@Body() userData: any) {
        return this.userService.login(userData);
    }
}
