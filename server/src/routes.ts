import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();
routes.get('/recovery/:hash', UserController.verifyToken);
routes.put('/recovery/:hash?', UserController.update);
routes.post('/login', UserController.show);
routes.post('/requestPasswordRecovery', UserController.generateToken);
routes.post('/register', UserController.store);

export default routes;
