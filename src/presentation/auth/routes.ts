import { Router } from 'express';
import { AuthController } from './controller'; // 1
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure'; // 5

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthDataSourceImpl(); //6
    const AuthRepository = new AuthRepositoryImpl(datasource); //7
    const controller = new AuthController(AuthRepository); // 2 // 8 actulizacion

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Inicia sesión un usuario
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 description: Correo electrónico del usuario
     *                 example: "john.doe@example.com"
     *               password:
     *                 type: string
     *                 description: Contraseña del usuario
     *                 example: "password123"
     *     responses:
     *       200:
     *         description: Inicio de sesión exitoso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 token:
     *                   type: string
     *                   description: Token JWT
     *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *       400:
     *         description: Error en la petición
     */
    router.post('/login', controller.loginUser); // 3

    /**
     * @swagger
     * /api/auth/register:
     *   post:
     *     summary: Registra un nuevo usuario
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: Usuario registrado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Usuario ya registrado (user already exist)
     *         
     */
    router.post('/register', controller.registerUser); // 4

    return router;
  }
}
