import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-kakao';
import { config } from 'dotenv';

config();

@Injectable() 
export class KakaoStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            clientID : process.env.KAKAO_CLIENT_ID,
            clientSecret: "", // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
            callbackURL : 'http://localhost:3006/auth/kakao/redirect',

        })
    };

    async validate(accessToken: string, refreshToken: string, profile: any, done): Promise<any>{
        const user={
            accessToken,
            id: profile.id,
            name: profile.username,
            photos: profile._json.properties.profile_image,
            provider: profile.provider
        }

        console.log(user);

        done(null, user);
    }


}