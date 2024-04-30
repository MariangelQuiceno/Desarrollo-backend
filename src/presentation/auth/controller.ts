import { Request, Response } from 'express'; // 5
import { RegisterUserDto} from '../../domain/dto/auth/register-user.dto';



export class AuthController { // 1

    constructor(){} // 2

   registerUser = (req: Request, res: Response ) => {
  const [error, registerUserDto] = RegisterUserDto.create(req.body);
  if ( error ) return res.status(400).json({ error });
  
  res.json(registerUserDto)
}

    loginUser =  (req: Request, res: Response) => { // 7
        res.json('loginUser controller') // 8

    } // 6

}