import { Request, Response } from 'express'; // 5
import { AuthRepository, CustomError,  RegisterUserDto } from '../../domain';




export class AuthController { // 1

    /* La función `private handleError` en la clase `AuthController` es un método utilizado para manejar
errores que pueden ocurrir durante la ejecución de ciertas operaciones, como el registro de un
usuario. Aquí hay un desglose de lo que hace: */
private handleError = ( error: unknown, res: Response ) => {
    
    /* El fragmento de código `if (instancia de error de CustomError)` comprueba si el objeto
    `error` es una instancia de la clase `CustomError`. Si el objeto "error" es una instancia de
    "CustomError", significa que el error se generó intencionalmente como un error personalizado
    dentro de la aplicación. */
     if ( error instanceof CustomError ) {
       return res.status(error.statusCode).json({ error: error.message });
     }

     /* La línea `return res.status(500).json({ error: 'Error interno del servidor' });` en el
     método `handleError` de la clase `AuthController` es responsable de enviar una respuesta
     JSON con un mensaje de error que indica una Error Interno del Servidor. */
     return res.status(500).json({ error: 'Internal Server Error' });
   }

    constructor(
        private readonly authRepository: AuthRepository //9
    ){} // 2

    registerUser = (req: Request, res: Response) => { // 4
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({ error });

        this.authRepository.register(registerUserDto!) //10
        .then( user => res.json(user) ) // 11
        .catch((error) => this.handleError(error, res));  // 12
    } // 3

    loginUser =  (req: Request, res: Response) => { // 7
        res.json('loginUser controller') // 8
    } // 6

}
