import styled from "styled-components";

interface Props {
    statusDisplay: string;
}

export const Container = styled.aside<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  transition: all 0.3s ease-in-out;
  opacity: ${({ statusDisplay }) => (statusDisplay === "none" ? 0 : 1)};
  visibility: ${({ statusDisplay }) => (statusDisplay === "none" ? "hidden" : "visible")};
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  & svg,path {
    color: ${({ theme }) => theme.colors.textColor};

  }
`;

export const Content = styled.div`
  position: relative;
  width: 60%;
  max-width: 800px;
  height: 80%;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow-y: auto;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }
`;

export const CommentContainer = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

export const Email = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Body = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.textColor};
`;