import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./app/database/DB";
dotenv.config();
connect();
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/user", routes);
const port = process.env.PORT ? process.env.PORT : 3000;
server.listen(port, () => {
    console.log(`🔥 server rodando na porta ${port}`);
});
