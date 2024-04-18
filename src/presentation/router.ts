import { Router } from 'express'; // 2
import { AuthRoutes } from '../auth/routes'; //6

export class AppRoutes { // 1


    static get routes(): Router { //3
  
      const router = Router(); //4
  
      // Definir todas mis rutas principales
      router.use('/api/auth', AuthRoutes.routes ) // 7

 
      return router; //5
    }
  
  
 }