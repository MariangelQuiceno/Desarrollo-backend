import { AuthDataSource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";//2




export class AuthRepositoryImpl implements AuthRepository {//1

    constructor(//3
        private readonly authDataSource: AuthDataSource,//4
    ){}

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {//5
        return this.authDataSource.register(registerUserDto);//6
    }

}