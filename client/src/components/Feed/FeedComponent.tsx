import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import { Action, ConfigUser, Container, Content, Div, FeedTitle, FooterPost, Header, InputContent, NameUser, Post, PostUser, PostUserContainer, Title, UserInfo } from './styles';
import { IoMdPerson, IoMdSearch } from "react-icons/io"
import { Comments } from './components/Comments/Comments';
import { PostComponent } from './components/Post/PostComponent';
import { AuthContext } from '../../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';

interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    allPosts?: PostInterface[];
}

export function FeedComponent() {
    const [users, setUsers] = useState<Array<UserInterface>>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const usersResponse = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const usersData: UserInterface[] = await usersResponse.json();
            const postsResponse = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const postsData: PostInterface[] = await postsResponse.json();

            const usersWithPosts = usersData.map((user) => {
                const userPosts = postsData.filter((post) => post.userId === user.id);
                return { ...user, allPosts: userPosts };
            });

            setUsers(usersWithPosts);
        }
        fetchData();
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const { userData: { name }, authorized } = useContext(AuthContext);

    useEffect(() => {
        if (!authorized) {
            navigate("/")
        }
    }, [])

    return (
        <Container>
            <Content>
                <Header>
                    <Title>ALKA<span>BOT</span></Title>
                    <InputContent>
                        <input type='text' placeholder='Qual usuario...' onChange={(e) => setSearchTerm(e.target.value)} />
                        <IoMdSearch size={25} />
                    </InputContent>
                    <UserInfo>
                        <ConfigUser>
                            <Link to="/account">
                                <IoMdPerson size={25} />
                                <span> Olá, {name}🔽</span>
                            </Link>
                        </ConfigUser>
                    </UserInfo>
                </Header>
                <Div>
                    <FeedTitle>Feed</FeedTitle>
                    {filteredUsers.map(({ allPosts, name, id }) => {
                        return (
                            allPosts && allPosts.map((post) => (
                                <PostComponent key={post.id} body={post.body} name={name} idUser={id} />
                            ))
                        );
                    })}
                </Div>
            </Content>
        </Container >
    );
}