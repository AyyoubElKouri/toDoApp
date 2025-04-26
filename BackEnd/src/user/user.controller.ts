import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/signup')
    signup(@Body() userData: any) {
        return this.userService.signup(userData);
    }

    @Get()
    getHello(): string {
        return 'Hello bro!';
    }
}
