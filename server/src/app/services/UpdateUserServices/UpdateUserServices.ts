import bcrypt from 'bcrypt';
import moment from 'moment';

import UserRepository from '../../repositories/UserRepository';
import { IUserInterface } from '../../types/user';

class UpdateUserServices {
  async execute(data: IUserInterface, hash: string) {
    if (!data) {
      return { status: 400, message: 'empty data' };
    }
    // se o hash estiver presente, é uma recuperação de conta
    if (hash) {
      const user = await UserRepository.find({ resetPasswordToken: hash });

      if (!user) {
        return {
          status: 400,
          message: 'The recovery URL provided is invalid.',
        };
      }

      const resetExpiresAt = moment(user.resetPasswordExpires);
      const now = moment();

      if (resetExpiresAt.isBefore(now)) {
        return {
          status: 400,
          message: 'The recovery URL provided has expired.',
        };
      }

      const { email } = user;

      // criptografa a senha antes de atualizar os dados do usuário

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);

      const respose = await UserRepository.update(
        { email },
        { ...data, password: hashedPassword },
      );
      if (respose) {
        user.resetPasswordToken = '';
        await user.save();
        return { status: 204, message: '' };
      }
      return { status: 500, message: 'err in server' };
    }
    return { status: 404, message: 'production' };
  }
}

export default new UpdateUserServices();
