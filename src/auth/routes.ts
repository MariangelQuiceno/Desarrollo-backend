import { Router } from 'express'; // 2

export class AuthRoutes { // 1

    static get routes(): Router { //3
  
      const router = Router(); //4 
  
        // Definir todas mis rutas especificas
        router.post('/login', (req, res) => {  //6 
            res.json({message: 'login'})
        })
      
        router.post('/register', (req, res) => { //7 
            res.json({message: 'register'})
        })
  
  
        return router; // 5
    }
  
  }