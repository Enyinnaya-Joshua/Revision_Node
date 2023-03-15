import express, { Application, Request, Response } from "express";
import appConfig from "./app";
import dbConfig from "./config/db";
import enviromentVariable from "./config/enviromentVariable";

const app = express();

// app initialisation
appConfig(app);

// database initialisation
dbConfig();

app.listen(enviromentVariable.PORT, () => {
  console.log("server is up and running");
});
