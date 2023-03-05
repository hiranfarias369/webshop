const app = require("./app");

// const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// // Handling Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting dow the server due to Uncaught exception`);
  process.exit(1);
});

//config

if(process.env.NODE_ENV!=="PRODUCTION"){

  require("dotenv").config({ path: "backend/config/config.env" });
}

//Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Servidor está funcionando em http://localhost:${process.env.PORT}`
  );
});

// Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting dow the server due to Unhandled Promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
