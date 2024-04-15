// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Spécifiez la version d'OpenAPI que vous utilisez
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentation for your API",
    },
  },
  apis: ["./routes/*.js"], // Spécifiez les fichiers qui contiennent vos routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
