import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
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
        email: yup.string().required("Digite seu E-mail"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;
export function RequestPassRecovery() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    function recovery({ email }: FormData) {
        axios.post("https://alkabot.onrender.com/user/requestPasswordRecovery", { email }).then(() => { navigate("/") }).catch(err => { console.log(err) })
    }
    return (
        <Container>
            <Content>
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
