import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
    Container,
    Content,
    Form,
    Input,
    InputContent,
    InputSubmit,
} from "./styles";
import { CardStatus } from "../CardStatus/CardStatus";
const schema = yup
    .object({
        email: yup.string().required("Digite seu E-mail"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

export function RequestPassRecovery() {
    const navigate = useNavigate()
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
    function recovery({ email }: FormData) {
        axios.post("https://alkabotapi.vercel.app/user/requestPasswordRecovery", { email }).then((data) => {
            setStatus(true)
            setMsg("SUCESSO OLHE SEU E-MAIL!")
            setActivitCard(true);
            setTimeout(() => {
                setActivitCard(false);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }, 2500);
        })

            .catch((err) => {
                setActivitCard(true)
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
                <CardStatus status={statusMsg} msg={msg} activitCard={activitCard} />
                <Form onSubmit={handleSubmit(recovery)}>
                    <h1>Recuperar acesso</h1>
                    <div>
                        <InputContent>
                            <Input type="Email" placeholder="Qual E-mail de acesso" {...register("email")} autoComplete="off" />
                            <FiLock size={20} />
                        </InputContent>
                        <span>{errors.email?.message}</span>
                    </div>
                    <div>
                        <InputSubmit type="submit" value="Solicitar recuperação" />
                    </div>
                    <div>
                        <h6>
                            <Link to="/">HOME AQUI!</Link>
                        </h6>
                    </div>

                </Form>
            </Content>
        </Container>
    );
}
