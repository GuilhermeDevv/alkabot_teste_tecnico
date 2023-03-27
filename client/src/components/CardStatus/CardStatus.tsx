import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export function CardStatus({ status, msg, activitCard }: { status: boolean, msg: string, activitCard: boolean }) {
    const [visibleClass, setVisibleClass] = useState(false);

    useEffect(() => {
        if (activitCard) {
            setVisibleClass(true);
            setTimeout(() => {
                setVisibleClass(false);
            }, 3500); // 5 segundos em milissegundos
        } else {
            setVisibleClass(false);
        }
    }, [activitCard]);

    return (
        <Container>
            <Content
                borderColor={status ? "green" : "red"}
                visible={visibleClass}
            >
                <div>
                    <span>{status  ? "Sucesso!":"Erro"}!</span>
                    {status ? (
                        <>
                            <AiFillLike />
                            <span>{msg}</span>
                        </>
                    ) : (<>
                        <AiFillDislike />
                        <span>{msg}</span>
                    </>
                    )}
                </div>
            </Content>
        </Container>
    );
}