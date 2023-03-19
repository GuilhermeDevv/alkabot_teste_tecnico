import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
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
const schema = yup
    .object({
        password: yup.string().required("Digite a nova senha!"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;
export function PasswordRecovery() {
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
        axios.get(`http://localhost:3000/user/recovery/${hash}`).then(() => { })
            .catch((err) => {
                navigate("/")

            })
    }, [])
    function recovery({ password }: FormData) {
        console.log(password)
        axios.put(`http://localhost:3000/user/recovery/${hash}`, { password }).then((data) => { console.log(data) }).catch(err => { console.log(err) })
    }
    return (
        <Container>
            <Content>
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
