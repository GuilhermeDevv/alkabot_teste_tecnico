import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.section`
    height: 100%;
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Form = styled.form`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 32px 0px;
    max-width: 500px;
    width: 90%;
    height: 500px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    & h1 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 16px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.textColorSecondary};
    }
    & div {
        display: flex;
        justify-content: center;
    }
`;
export const AboutAcess = styled.div`
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 6px;
    & a {
        color: ${({ theme }) => theme.colors.textColorSecondary};
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        text-decoration: underline;
    }
    & h6 {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.textColor};
    }
`;
export const Input = styled.input`
    font-size: 16px;
    padding: 10px 16px;
    outline: none;
    width: 320px;
    max-width: 90%;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
`;
export const InputContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg,
    path {
        position: absolute;
        right: 30px;
        height: 100%;
        color: ${({ theme }) => theme.colors.textColor};
        background-color: ${({ theme }) => theme.colors.background};
    }
    & rect {
        color: ${({ theme }) => theme.colors.textColor};
    }
`;
export const InputSubmit = styled(Input)`
height: 50px;
    margin-top: 4px;
    background-color: ${({ theme }) => theme.colors.backgroundButtonSecondary};
    font-size: 18px;
    text-transform: uppercase;
    &:hover{
        scale:1.05;
    }


`;
