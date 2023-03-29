import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();
routes.post('/login', UserController.show);
routes.post('/register', UserController.store);
routes.put('/recovery/:hash?', UserController.update);
routes.post('/requestPasswordRecovery', UserController.generateToken);
routes.get('/recovery/:hash', UserController.verifyToken);

export default routes;
