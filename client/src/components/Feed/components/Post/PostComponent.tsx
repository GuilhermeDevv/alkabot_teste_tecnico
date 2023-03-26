import { Dispatch, useState } from "react";
import { Comments } from "../Comments/Comments";
import { Action, FooterPost, NameUser, Post, PostUser, PostUserContainer } from "./styles"


export function PostComponent({ name, body, idUser }: { name: string, body: string, idUser: number }) {
    const [displayComments, setDisplayComments] = useState<string>("none")
    return (
        <>
            <Post>
                <PostUserContainer>
                    <NameUser><span>Usuario</span>: {name}</NameUser>
                    <PostUser><span>POSTAGEM</span>: {body}</PostUser>
                </PostUserContainer>
                <FooterPost>
                    <Action>
                        <span onClick={() => { setDisplayComments("flex") }}>Comentarios</span>
                    </Action>
                </FooterPost>
            </Post>
            <Comments display={displayComments} displayFn={setDisplayComments} idPost={idUser} />
        </>

    );
}

