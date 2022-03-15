import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authservice: AuthService){};

    @Get()
    home():string{
        return "asdasd"
    }

    @Get("google")
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req){
        console.log('google')
    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req){
        console.log('redirect');
        return this.authservice.googleLogin(req);
    }


    @Get("kakao")
    kakao():string{
        return "kakao log in";
    }
}
