import { Request, Response } from "express";
import crypto from "crypto"
import bcrypt from "bcrypt"
import userModel from "../models/userModel";
import UserRespository from "../repositories/UserRespository";
import axios from "axios"
import UserInterface from "../types/user";
import moment from "moment";


class UserController {
    async index(req: Request, res: Response) { }

    async show(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!password || !email) {
            return res.status(400).json({ message: "empty data" });
        }
        const user = await UserRespository.find(email);
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const data = { email: user.email, name: user.name };
                return res.status(200).json(data);
            }
        }

        res.status(404).json({
            status: "failed",
            message: "user not exist or incorrect password",
        });
    }

    async store(req: Request, res: Response) {
        const data = req.body;
        const { email, password, name } = data;

        if (!name || !password || !email) {
            return res.status(400).json({ message: "empty data" });
        }

        const isUser = await UserRespository.find(email);

        if (isUser) {
            return res.status(400).json({
                status: "failed",
                message: "user already exists",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const user = await UserRespository.create({
            ...data,
            password: encryptedPassword,
        });

        return res.json({ data: user });
    }

    async update(req: Request, res: Response) {
        const data: Partial<UserInterface> = req.body;
        const { hash } = req.params;

        if (!data) {
            return res.status(400).json({ message: "empty data" });
        }
        // se o hash estiver presente, é uma recuperação de conta
        if (hash) {
            const user = await userModel.findOne({ resetPasswordToken: hash });

            if (!user) {
                return res.status(400).json({
                    message: "The recovery URL provided is invalid.",
                });
            }

            const resetExpiresAt = moment(user.resetPasswordExpires);
            const now = moment();

            if (resetExpiresAt.isBefore(now)) {
                return res.status(400).json({
                    message: "The recovery URL provided has expired.",
                });
            }

            const { email } = user;
            await UserRespository.update({ email }, data);
            user.resetPasswordToken = "";
            await user.save();

            return res.status(204).send();
        }
    }

    async delete(req: Request, res: Response) { }

    async verifyToken(req: Request, res: Response) {
        console.log(req.params.hash + "testeaqui")
        if (req.params.hash) {
            const user = await userModel.findOne({ resetPasswordToken: req.params.hash });
            console.log(user)
            if (!user) {
                return res.status(400).json({
                    message: "The recovery URL provided is invalid.",
                });
            }

            return res.status(204).send();
        }
    }

    async generateToken(req: Request, res: Response) {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "empty email" });
        }

        const user = await UserRespository.find(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const token = crypto.randomBytes(20).toString("hex");

        await UserRespository.update({ email }, {
            resetPasswordToken: token,
            resetPasswordExpires: new Date(Date.now() + 3600000),
        });

        const apiKey = 'D0BXmpS5ur1G5-2ci';
        const data = {
            service_id: 'gmail',
            template_id: 'ALKABOT_TEMPLATE',
            user_id: apiKey,
            accessToken: "N3CyzkLq2SdY9tMQeOcr6",
            template_params: {
                destinatario: user.email,
                name: user.name,
                message: `Aqui está o link para você recuperar sua conta, ele tem prazo de 1 HORA. https://alkabot.onrender.com/recovery/${token}`,
            }
        };
        console.log(token)

        axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(() => {
            return res.status(200).json({ message: "E-mail enviado", success: true })
        }).catch((error) => {
            return res.status(500).json({ message: "Problema no servidor", erro: error, success: false })
        });


    }
}

export default new UserController();