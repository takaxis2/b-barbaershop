import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { config } from 'dotenv';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){

    constructor(){
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:'http://localhost:3006/auth/google/redirect',
            scope:['email', 'profile']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback):Promise<any>{

        const user = {
            accessToken,
            id : profile.id,
            name : profile.displayName,
            email : profile.emails[0].value,
            photos: profile.photos[0].value,
            provider: profile.provider
        }
        done(null, user);
    }

}
/**
 profile: {
    id: '100231573695295279280',
    displayName: '탁호성',
    name: { familyName: '탁', givenName: '호성' },
    emails: [ [Object] ],
    photos: [ [Object] ],
    provider: 'google',
    _raw: '{\n' +
      '  "sub": "100231573695295279280",\n' +
      '  "given_name": "호성",\n' +
      '  "family_name": "탁",\n' +
      '  "picture": "https://lh3.googleusercontent.com/a/AATXAJyPdzOW9Q0Yx430h177t71dC9O_L5UoVCLuK4Q\\u003ds96-c",\n' +
      '  "email": "axis1130@gmail.com",\n' +
      '  "email_verified": true,\n' +
      '  "locale": "ko"\n' +
      '}',
    _json: {
      sub: '100231573695295279280',
      name: '탁호성',
      given_name: '호성',
      family_name: '탁',
      picture: 'https://lh3.googleusercontent.com/a/AATXAJyPdzOW9Q0Yx430h177t71dC9O_L5UoVCLuK4Q=s96-c',
      email: 'axis1130@gmail.com',
      email_verified: true,
      locale: 'ko'
    }
  }
}
 */