import React, { Dispatch, useEffect, useState } from 'react';
import { Body, Close, CommentContainer, Container, Content, Email } from './styles';
import { IoMdClose } from "react-icons/io"

interface Props {
    statusDisplay: string;
}

interface Comment {
    email: string;
    body: string;
}

interface CommentsProps {
    display: string;
    displayFn: React.Dispatch<React.SetStateAction<string>>;
    idPost: number;
}

export function Comments({ display, displayFn, idPost }: CommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, [idPost]);

    return (
        <Container statusDisplay={display}>
            <Content>
                <Close>
                    <IoMdClose size={35} onClick={() => displayFn("none")} />
                </Close>
                <div>
                    {comments.map(({ body, email }, index) => {
                        return (
                            <CommentContainer key={index}>
                                <Email>{email}</Email>
                                <Body>{body}</Body>
                            </CommentContainer>
                        );
                    })}
                </div>
            </Content>
        </Container>
    );
}