import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain"; //2



export class AuthDataSourceImpl implements AuthDataSource {//1
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {//3
        const {name, email, password} = registerUserDto;// 4

        try{//5


            return new UserEntity(// 6
                '1', 
                name, 
                email, 
                password, 
                ['USER']);    

        }catch(error){
            if(error instanceof CustomError){//7
                throw error;
            }
            throw CustomError.internalServer();//8
        }
    }
    
}