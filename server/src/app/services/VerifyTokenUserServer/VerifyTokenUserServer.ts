import UserRepository from '../../repositories/UserRepository';

class VerifyTokenUserServer {
  async execute(hash: string) {
    if (hash) {
      const user = await UserRepository.find({
        resetPasswordToken: hash,
      });

      if (!user) {
        return {
          status: 400,
          message: 'The recovery URL provided is invalid.',
        };
      }
    }
    return {
      status: 204,
      message: '',
    };
  }
}

export default new VerifyTokenUserServer();
