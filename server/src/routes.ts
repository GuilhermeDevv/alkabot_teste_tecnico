import { Router } from "express";
import UserController from "./app/controllers/userController";

const routes = Router();


routes.get("/recovery/:hash", UserController.verifyToken);
routes.put("/recovery/:hash?", UserController.update);
routes.post("/requestPasswordRecovery", UserController.generateToken);
routes.post("/login", UserController.show);
routes.post("/register", UserController.store);



export default routes;
