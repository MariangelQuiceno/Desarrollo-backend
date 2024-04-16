// importamos las librerias 
import 'dotenv/config';
import { get} from 'env-var';

// creamos nuestro enum que manejera nuestra envs
export const envs = {

    PORT: get('PORT').required().asPortNumber(),
}