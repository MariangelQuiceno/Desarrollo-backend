import { Router } from 'express';
import { AuthController } from './controller'; // 1

export class AuthRoutes {


    static get routes(): Router {

      const router = Router();
      const controller = new AuthController(); // 2

        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser) // 3
        router.post('/register', controller.registerUser) // 4

        return router;
    }

  }