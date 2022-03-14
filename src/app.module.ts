import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

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
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
