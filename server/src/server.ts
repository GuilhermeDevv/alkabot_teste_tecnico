import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./app/database/DB";
dotenv.config();
connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", routes);
const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
    console.log(`🔥 server rodando na porta ${port}`);
});
