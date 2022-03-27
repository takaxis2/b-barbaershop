import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthModule } from 'src/jwt-auth/jwt-auth.module';
import { HttpModule } from '@nestjs/axios';
import { KakaoStrategy } from './strategies/kakao.strategy';

@Module({
  imports:[
    PassportModule,
    JwtAuthModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, KakaoStrategy],
  
})
export class AuthModule {}
