import { UserModel } from "../../data/models/users.model"; //9
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain"; //2
import { BcryptAdapter } from "../../config";


// creamos types de los metodos de encriptacion

type HashFuntion = (password: string) => string;

type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDataSourceImpl implements AuthDataSource {
  // inyeccion de dependencia para adapter de bcrypt
  constructor(
    private readonly hashPassword: HashFuntion = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}

  //1
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    //3
    const { name, email, password } = registerUserDto; // 4

    try {
      //5

      // verficar si el correo existe
      const exists = await UserModel.findOne({ email });
      if (exists) throw CustomError.badRequest("User already exists");

      // Crear el usuario
      const user = await UserModel.create({
        name: name,
        email: email,
        password: this.hashPassword(password),
      });
      // Guardamos el usuario en la base de datos
      await user.save();

      // TODO: Hash de contraseña

      // TODO: Mapear la respuesta a nuestra entidad
      return new UserEntity( // 6
        user.id, // se reemplazó '1'
        name,
        email,
        user.password,//se reemplazó por password
        user.roles //se reemplazó ['USER']
      );
    } catch (error) {
      if (error instanceof CustomError) {
        //7
        throw error;
      }
      throw CustomError.internalServer(); //8
    }
  }
}