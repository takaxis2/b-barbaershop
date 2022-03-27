import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {


    async Login(user){
        console.log(user);
        /** db에서 유저 확인 */


        /**db 확인후 유저 생성하는 로직으로 변경 */
        if(!user){
            return 'No user from google';
        }

        return {
            message:'User information from google',
            profile: user
        }
    }

    
}

