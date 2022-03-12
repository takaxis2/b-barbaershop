import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
        ){};

    async findbyField(option: FindOneOptions<UserDto>):Promise<UserDto|undefined>{
        return await this.userRepository.findOne(option);
    }

    async save(userDto: UserDto):Promise<UserDto|undefined>{
        return await this.userRepository.save(userDto);
    }

}