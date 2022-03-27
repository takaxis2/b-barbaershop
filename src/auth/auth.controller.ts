import { Body, Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthService } from 'src/jwt-auth/jwt-auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly Authservice: AuthService,
        private jwtAuthService: JwtAuthService
    ){};

    @Get("google")
    @UseGuards(AuthGuard('google'))
    googleAuth(@Req() req){
        
    }

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req){

        if(req.user){
            const accessToken= null; /**얘는 우리 서비스에서 쓸 토큰 */
            /**여기서 함수, accesstoken으로 구글에 확인후에 유저 생성 및 리턴 */
            const user = await this.Authservice.Login(req.user);
            

            return user;

            // const {accessToken} = this.jwtAuthService.logIn(req.user);
            // res.cookie('jwt',accessToken,{
            //     httpOnly:true,
            //     secure:true,
            // });
            
            // res.setHeader('jwt', accessToken)
            // res.redirect("http://localhost:3000");
            
           
        }
    }


    @Get("kakao")
    @UseGuards(AuthGuard('kakao'))
    kakao():string{
        return "kakao log in";
    }

    @Get('kakao/redirect')
    @UseGuards(AuthGuard('kakao'))
    async kakaoAuthRedirect(@Req() req){

    }

    @Get('local')
    async localAuth(@Req() req){
        return "working";
    }


}
