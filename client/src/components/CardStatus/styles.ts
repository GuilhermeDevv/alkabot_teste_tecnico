import styled, { css } from "styled-components";

interface props {
    borderColor: string;
    visible: boolean;
}


export const Container = styled.div`
  position: fixed;
left: 0;
top:0;
  z-index: 4;
`;

export const Content = styled.div<props>`
  width: 60vw;
  max-width: 350px;
  padding: 10px 0px;
  border-radius: 10px;
  top: 10px;
  background-color: #ffffff;
  border-top: solid 2px ${({ borderColor }) => borderColor};
  position: relative;
  transition: transform 0.5s linear;
  ${({ visible }) =>
        visible ? "transform: translateX(10px)" : "transform: translateX(-120%)"};

  & div {
    & svg,
    path {
      size: 40px;
      min-width: 40px;
      min-height: 40px;
      color:${({ borderColor }) => borderColor};
    }
    & span {
      font-size: 16px;
      font-weight: bold;
      color:black;
      text-transform: uppercase;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 80%;
  }
`;