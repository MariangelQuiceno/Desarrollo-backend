import { Router } from 'express';
import { AuthController } from './controller'; // 1
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure'; // 5

export class AuthRoutes {


    static get routes(): Router {
  
      const router = Router();

      const datasource = new AuthDataSourceImpl(); //6
      const AuthRepository = new AuthRepositoryImpl(datasource); //7
      const controller = new AuthController(AuthRepository); // 2 // 8 actulizacion
  
        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser) // 3
        router.post('/register', controller.registerUser) // 4
  
  
        return router;
    }
  
  }