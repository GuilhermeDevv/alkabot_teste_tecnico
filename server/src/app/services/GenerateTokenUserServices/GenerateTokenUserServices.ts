import axios from 'axios';
import crypto from 'crypto';

import UserRepository from '../../repositories/UserRepository';

class GenerateTokenUserServices {
  async execute(email: string) {
    if (!email) {
      return { status: 400, message: 'empty email' };
    }

    const user = await UserRepository.find({ email });
    if (!user) {
      return { status: 404, message: 'User not found' };
    }
    const token = crypto.randomBytes(20).toString('hex');
    await UserRepository.update(
      { email },
      {
        resetPasswordToken: token,
        resetPasswordExpires: new Date(Date.now() + 3600000),
      },
    );

    const apiKey = 'D0BXmpS5ur1G5-2ci';
    const data = {
      service_id: 'gmail',
      template_id: 'ALKABOT_TEMPLATE',
      user_id: apiKey,
      accessToken: 'N3CyzkLq2SdY9tMQeOcr6',
      template_params: {
        destinatario: user.email,
        name: user.name,
        message: `Aqui está o link para você recuperar sua conta, ele tem prazo de 1 HORA. https://alkabot.vercel.app/recovery/${token}`,
      },
    };

    const responseRequest = axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(() => {
        return { status: 200, message: 'E-mail enviado' };
      })
      .catch(() => {
        return { status: 500, message: 'Problema no servidor' };
      });

    return responseRequest;
  }
}

export default new GenerateTokenUserServices();
