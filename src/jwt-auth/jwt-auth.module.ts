import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './jwt-auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { config } from 'dotenv';

config();

@Module({
    imports:[
        JwtModule.registerAsync({
            useFactory:async()=>{
                return {
                    secret: process.env.JWT_SECRET,
                    signOptions:{
                        expiresIn:process.env.JWT_EXPIRES_IN
                    }
                }
            }
        }),
    ],
    providers:[JwtAuthService, JwtStrategy],
    exports:[JwtModule, JwtAuthService]
})
export class JwtAuthModule {}
