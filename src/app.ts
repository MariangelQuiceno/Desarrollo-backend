import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb/mongo-database"; //2
import swagger from "./docs/swagger";
import { AppRoutes } from "./presentation/router"; //1
import { Server } from "./presentation/server";
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./docs/swagger";

(async () => {
  await main();
})();

async function main() {
  // Conectar a la base de datos
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  // Crear una instancia de Express
  const express = require('express');
  const app = express();

  // Configurar middlewares
  app.use(express.json());

  // Configurar rutas
  app.use(AppRoutes.routes);

  // Configurar Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

  // Iniciar el servidor
  const PORT = envs.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

