const express = require("express");

const app = express();

app.use(express.json());

// const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

// app.use(cookieParser());

// Route Imports
const product = require("./routes/productRoute");

// const user = require("./routes/userRoute");

app.use("/api/v1", product);

// app.use("/api/v1", user);

// Middleware for erros
app.use(errorMiddleware);

module.exports = app;
