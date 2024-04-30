"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const register_user_dto_1 = require("../../domain/dto/auth/register-user.dto");
class AuthController {
    constructor() {
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = register_user_dto_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            res.json(registerUserDto);
        };
        this.loginUser = (req, res) => {
            res.json('loginUser controller'); // 8
        }; // 6
    } // 2
}
exports.AuthController = AuthController;
