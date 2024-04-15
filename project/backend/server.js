/*
 * Author : Thierry Maurouzel
 * Description :
 * Last update :
 */

const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const userRoutes = require("./routes/api/userRoutes");
const swaggerUi = require("swagger-ui-express");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const swaggerSpec = require("./swagger");
const PORT = process.env.PORT || 3500;
const path = require("path");
const databaseConnectionCheckMiddleware = require("./middleware/databaseTester");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

// serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Endpoint to display Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use(verifyJWT);
app.use("/users", userRoutes);
// app.use('/locations', locationRoutes); A FAIRE

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ error: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.use(databaseConnectionCheckMiddleware);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
