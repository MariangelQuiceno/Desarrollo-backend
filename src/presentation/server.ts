import  express, { Router }  from "express"; //2

interface Options{
    port?: number;
    routes: Router; //1
}

export class Server {   
    
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router; //4
   
    constructor( options: Options ) {
        const { port = 3100, routes } = options; //3
        this.port = port;
        this.routes = routes; //5
    }
        
   async start() {

        // Middlewares
        this.app.use( express.json() ); //7
        this.app.use( express.urlencoded({ extended: true }) ); //8

        // Usar las rutas definidas
        this.app.use(this.routes); //6

        // Escuchar el puerto
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
   }
}