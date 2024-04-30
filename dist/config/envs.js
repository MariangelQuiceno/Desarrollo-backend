"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
// importamos las librerias 
require("dotenv/config");
const env_var_1 = require("env-var");
// creamos nuestro enum que manejera nuestra envs
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
};
