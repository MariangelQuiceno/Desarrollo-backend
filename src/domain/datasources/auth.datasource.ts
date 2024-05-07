import { UserEntity } from "../entities/auth/user.entity";//2
import { RegisterUserDto } from '../dto/auth/register-user.dto';//3


export abstract class AuthDataSource { // 1
    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity> //4

} 