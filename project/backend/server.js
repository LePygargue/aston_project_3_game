/* 
* Author :
* Info : 
* Last update :
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Endpoint pour afficher la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
// app.use('/locations', locationRoutes); A FAIRE

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
