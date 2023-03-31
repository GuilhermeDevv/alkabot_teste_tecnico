import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardStatus } from "../CardStatus/CardStatus";

import * as yup from "yup";
import axios from "axios";
import {
    AboutAcess,
    Container,
    Content,
    Form,
    Input,
    InputContent,
    InputSubmit,
} from "./styles";

const schema = yup
    .object({
        name: yup.string().required("Digite seu nome"),
        email: yup.string().required("Digite seu E-mail"),
        password: yup.string().required("Digite sua Senha"),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref("password"), undefined],
                "As senhas precisam ser iguais"
            ),
    })
    .required();
type FormData = yup.InferType<typeof schema>;
export function RegisterCompoments() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const [statusMsg, setStatus] = useState(false);
    const [msg, setMsg] = useState("SUCESSO");
    const [activitCard, setActivitCard] = useState(false);

    function createUser(data: FormData) {
        axios
            .post("https://alkabotapi.vercel.app/user/register", {
                name: data.name,
                password: data.password,
                email: data.email,
            })
            .then((data) => {
                setStatus(true);
                setMsg("SUCESSO");
                setActivitCard(true);
                setTimeout(() => {
                    setActivitCard(false);
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                }, 2500);
            })

            .catch((err) => {
                console.log(err);
                setActivitCard(true);
                setStatus(false);
                setMsg(err.response.data.message);
                setTimeout(() => {
                    setActivitCard(false);
                }, 3000);
            });
    }
    return (
        <Container>
            <Content>
                <CardStatus
                    status={statusMsg}
                    msg={msg}
                    activitCard={activitCard}
                />
                <Form onSubmit={handleSubmit(createUser)}>
                    <h1>Seja bem-vindo!</h1>
                    <div>
                        <InputContent>
                            <Input
                                type="text"
                                placeholder="Name"
                                {...register("name")}
                                autoComplete="off"
                            />
                            <AiOutlineUser size={20} />
                        </InputContent>
                        <span>{errors.name?.message}</span>
                    </div>
                    <div>
                        <InputContent>
                            <Input
                                type="text"
                                placeholder="E-mail"
                                {...register("email")}
                                autoComplete="off"
                            />
                            <AiOutlineMail size={20} />
                        </InputContent>
                        <span>{errors.email?.message}</span>
                    </div>
                    <div>
                        <InputContent>
                            <Input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                autoComplete="off"
                            />
                            <FiLock size={20} />
                        </InputContent>
                        <span>{errors.password?.message}</span>
                    </div>
                    <div>
                        <InputContent>
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                {...register("confirmPassword")}
                                autoComplete="off"
                            />
                            <FiLock size={20} />
                        </InputContent>
                        <span>{errors.confirmPassword?.message}</span>
                    </div>
                    <div>
                        <InputSubmit type="submit" value="Entrar" />
                    </div>
                    <AboutAcess>
                        <h6>
                            Esqueceu a{" "}
                            <Link to="/requestPasswordRecovery">senha</Link> ?
                        </h6>
                        <Link to="/">Tenho acesso</Link>
                    </AboutAcess>
                </Form>
            </Content>
        </Container>
    );
}
