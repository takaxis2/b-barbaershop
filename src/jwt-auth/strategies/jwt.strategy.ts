import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from "passport-local";

import { config } from "dotenv";

config();

export type JwtPayload = {sub:number; username: string;}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        const extractJwtFromCookie = (req) =>{
            let token = null;
            if(req && req.cookies){
                token=req.cookies['jwt'];
            }
            return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        };

        super({
            jwtFromRequest: extractJwtFromCookie,
            ignoreExpiration: false,
            secretorKey: process.env.JWT_KEY
        })
    }

    extractJwtFromCookie(req){
        let token = null;
        if(req && req.cookies){
            token = req.cookies['jwt'];
        }

        return token;
        // 이 친구는 authHeader에서 bearer token 빼기
        // return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    }

    async validate(payload: JwtPayload){
        return {id: payload.sub, username: payload.username}
    }

}