import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';


@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type:'mysql',
    //   host:'localhost',
    //   port:3306,
    //   username:'root',
    //   password:'1q2w3e4r',
    //   database:'barbershop',
    //   entities:[],
    //   synchronize:true, //얘는 테스트때만
    // }),
    AuthModule,
    // UserModule,
    JwtAuthModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
