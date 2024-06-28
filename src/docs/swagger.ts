import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Pet Store API",
    version: "1.0.0",
    description: "API para la tienda de mascotas - Actividad de Backend",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor de desarrollo",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
          name: {
            type: "string",
            description: "Nombre del usuario",
            example: "John Doe",
          },
          email: {
            type: "string",
            description: "Correo electrónico del usuario",
            example: "john.doe@example.com",
          },
          password: {
            type: "string",
            description: "Contraseña del usuario",
            example: "password123",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/presentation/auth/*.ts", "./src/presentation/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
