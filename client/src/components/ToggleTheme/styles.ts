import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 599;
    width: fit-content;
    height: fit-content;
    animation: puls infinite 1s ease-in-out;
    @keyframes puls {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.05;
        }
        100% {
            scale: 1;
        }
    }
`;
export const Content = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.backgroundButton};
    padding: 10px;
    border-radius: 50%;

    & svg,
    path,
    circle,
    line {
        color: ${({ theme }) => theme.colors.backgroundSecondary};
    }
`;
