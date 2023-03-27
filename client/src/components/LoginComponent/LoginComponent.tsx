import React, { useContext, useState } from "react";
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import {
    AboutAcess,
    Container,
    Content,
    Form,
    Input,
    InputContent,
    InputSubmit,
} from "./styles";
import { CardStatus } from "../CardStatus/CardStatus";

const schema = yup.object({
    email: yup.string().required("Digite seu E-mail"),
    password: yup.string().required("Digite sua Senha"),
});

type FormData = yup.InferType<typeof schema>;

export function LoginComponent() {
    const { setUserData, setAuthorized } = useContext(AuthContext);
    const navigate = useNavigate();
    const [statusMsg, setStatus] = useState(false);
    const [msg, setMsg] = useState("SUCESSO");
    const [activitCard, setActivitCard] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        axios
            .post("https://alkabot.onrender.com/user/login", {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                const { email, name } = response.data;
                setAuthorized(true);
                setUserData({ email, name });
                navigate("/feed");
            })
            .catch((err) => {
                setActivitCard(true)
                setStatus(false);
                setMsg(err.response.data.message);
                setTimeout(() => {
                    setActivitCard(false);
                }, 3000);
            });
    };

    return (
        <Container>
            <Content>
                <CardStatus status={statusMsg} msg={msg} activitCard={activitCard} />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Acesse sua conta!</h1>
                    <div>
                        <InputContent>
                            <Input
                                type="text"
                                placeholder="E-mail"
                                autoComplete="off"
                                {...register("email")}
                            />
                            <AiOutlineMail size={20} />
                        </InputContent>
                        <span>{errors.email?.message}</span>
                    </div>
                    <div>
                        <InputContent>
                            <Input
                                type="password"
                                placeholder="Senha"
                                autoComplete="off"
                                {...register("password")}
                            />
                            <FiLock size={20} />
                        </InputContent>
                        <span>{errors.password?.message}</span>
                    </div>
                    <div>
                        <InputSubmit type="submit" value="Entrar" />
                    </div>
                    <AboutAcess>
                        <h6>
                            Esqueceu a{" "}
                            <Link to="/requestPasswordRecovery">senha</Link>?
                        </h6>
                        <Link to="/register">Não tenho conta!</Link>
                    </AboutAcess>
                </Form>
            </Content>
        </Container>
    );
}