import express from "express";
import appConfig from "./app";
import dbConfig from "./config/db";
import enviromentVariable from "./config/enviromentVariable";

const app = express();

// app initialisation
appConfig(app);

// db initialisation
dbConfig();
app.listen(enviromentVariable.PORT, () => {
  console.log("server is running");
});
