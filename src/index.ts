import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import userRoutes from "./routes/user";

const app = express();
app.use(express.json());

createConnection().then(() => {
  app.use("/api", userRoutes);
  app.listen(3000, () => console.log("Server started on port 3000"));
});