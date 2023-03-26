import styled from "styled-components";

export const Post = styled.div`
border-radius: 20px;
padding: 0px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundSecondary};
width: 70%;
min-height: 500px;
`

export const PostUserContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 20px;
margin-top: 15px;


`

export const NameUser = styled.div`
& span{
    color: ${({ theme }) => theme.colors.textColor};
    text-transform: uppercase;
    font-weight:bold;
}
color: ${({ theme }) => theme.colors.textColorSecondary};
font-size: 18px;
`
export const PostUser = styled.div`
& span{color: ${({ theme }) => theme.colors.textColor};
font-weight:bold;}
color: ${({ theme }) => theme.colors.textColorSecondary};
     font-size:25px;
`

export const FooterPost = styled.div`
width: 100%;
height: 70px;
background-color: ${({ theme }) => theme.colors.background};
border-top-left-radius:30px ;
border-top-right-radius:30px ;
`
export const Action = styled.div`
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
border-top-left-radius:20px ;
border-top-right-radius:20px ;

& span{
 cursor: pointer;
 color: ${({ theme }) => theme.colors.textColor};
 background-color: ${({ theme }) => theme.colors.backgroundSecondary};
 border-radius: 10px;
 font-size: 16px;
 padding: 15px 25px;
 &:hover{

    scale: 1.08;
 }

}`