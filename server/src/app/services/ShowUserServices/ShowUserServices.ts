/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';

import UserRepository from '../../repositories/UserRepository';

interface IRequest {
  email: string;
  password: string;
}

class ShowUserServices {
  async execute(data: IRequest) {
    const { email, password } = data;
    if (!password || !email) {
      return {
        status: 404,
        message: 'empty data',
      };
    }
    const user = await UserRepository.find({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const data = { email: user.email, name: user.name };
        return { status: 200, message: { ...data, password } };
      }
      return {
        status: 404,
        message: 'not match password',
      };
    }
    return { status: 400, message: 'user not found' };
  }
}
export default new ShowUserServices();
