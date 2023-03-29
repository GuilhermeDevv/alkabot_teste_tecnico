import bcrypt from 'bcrypt';

import UserRepository from '../../repositories/UserRepository';

interface IRequest {
  name: string;
  password: string;
  email: string;
}
class StoreUserServices {
  async execute(data: IRequest) {
    const { email, name, password } = data;
    if (!email || !name || !password) {
      return {
        status: 404,
        message: 'empty data',
      };
    }
    const isUser = await UserRepository.find(email);
    if (isUser) {
      return {
        status: 400,
        message: 'user already exists',
      };
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    await UserRepository.create({
      ...data,
      password: encryptedPassword,
    });
    return {
      status: 200,
      message: 'user created',
    };
  }
}
export default new StoreUserServices();
