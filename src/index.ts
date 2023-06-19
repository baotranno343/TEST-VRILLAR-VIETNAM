import express, { Request, Response } from "express";
import route from "./routes/api";
import mongoDbClient from "./config/database/mongodb";
import "dotenv/config";
const app = express();
route(app);
mongoDbClient.connect();
app.listen(3000, () => {
  console.log("running 3000");
});
