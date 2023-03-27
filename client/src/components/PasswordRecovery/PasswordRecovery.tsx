import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
        password: yup.string().required("Digite a nova senha!"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;
export function PasswordRecovery() {
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
    //redirect para home caso nao tenha hash na rota e se caso hash nao exista faz tambem
    const { hash } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://alkabot.onrender.com/user/recovery/${hash}`).then(() => { })
            .catch((err) => {
                navigate("/")

            })
    }, [])

    function recovery({ password }: FormData) {
        console.log(password)
        axios.put(`https://alkabot.onrender.com/user/recovery/${hash}`, { password }).then((data) => {
            setStatus(true)
            setMsg("SUCESSO")
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
                },3000);
            });
    }

    return (
        <Container>
            <Content>
                <CardStatus status={statusMsg} msg={msg} activitCard={activitCard} />
                <Form onSubmit={handleSubmit(recovery)}>
                    <h1>Digite sua senha!</h1>
                    <div>
                        <InputContent>
                            <Input type="password" placeholder="Password" {...register("password")} />
                            <FiLock size={20} />
                        </InputContent>
                        <span></span>
                    </div>
                    <div>
                        <InputSubmit type="submit" value="Alterar senha" />
                        <span></span>
                    </div>
                </Form>
            </Content>
        </Container>
    );
}
