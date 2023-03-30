import { Request, Response } from 'express';

import GenerateTokenUserServices from '../services/GenerateTokenUserServices/GenerateTokenUserServices';
import ShowUserServices from '../services/ShowUserServices/ShowUserServices';
import StoreUserServices from '../services/StoreUserServices/StoreUserServices';
import UpdateUserServices from '../services/UpdateUserServices/UpdateUserServices';
import VerifyTokenUserServer from '../services/VerifyTokenUserServer/VerifyTokenUserServer';

class UserController {
  async show(req: Request, res: Response) {
    const data = req.body;
    const { status, message } = await ShowUserServices.execute(data);
    return res.status(status).json(message);
  }
  async store(req: Request, res: Response) {
    const data = req.body;
    const { message, status } = await StoreUserServices.execute(data);
    return res.status(status).json(message);
  }
  async update(req: Request, res: Response) {
    const data = req.body;
    const { hash } = req.params;
    const { status, message } = await UpdateUserServices.execute(data, hash);
    return res.status(status).json(message);
  }
  async generateToken(req: Request, res: Response) {
    const { email } = req.body;
    const { status, message } = await GenerateTokenUserServices.execute(email);
    res.status(status).json(message);
  }
  async verifyToken(req: Request, res: Response) {
    const { hash } = req.params;
    const { status, message } = await VerifyTokenUserServer.execute(hash);
    return res.status(status).json(message);
  }
}

export default new UserController();
