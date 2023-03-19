import styled from "styled-components";

export const Container = styled.section`
width: 100%;
min-height: 100vh;
background-color: ${({ theme }) => theme.colors.background};


`

export const Content = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;

`


export const Header = styled.header`
background-color: ${({ theme }) => theme.colors.backgroundSecondary};
width:100%;
display: flex;
height: 80px;
padding: 0px 40px;
align-items: center;
justify-content: space-around;
position: sticky;
top: 0px;

@media(max-width:428px){padding: 0px 30px ;gap:15px;}
`
export const InputContent = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;


& input{
background-color: ${({ theme }) => theme.colors.backgroundSelected};
padding:8px 0px 8px 8px;
border: none;
outline: none;
max-width: 320px;
font-size: 16px;
border-radius: 10px;
}
& svg,path{

    position: absolute;
    right: 10px;
}

`
export const Title = styled.h1`
font-size: 22px;
color: ${({ theme }) => theme.colors.textColor};
& span{
    color: ${({ theme }) => theme.colors.textColorSecondary};
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
}
`
export const ConfigUser = styled.div`

& a {

    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.colors.textColorSecondary};
    font-size: 22px;
    text-transform: capitalize;
    font-weight: bold;
}
@media(max-width:428px){display:none;}
`
export const UserInfo = styled.div`
display:flex;
align-items: center;
font-size: 14px;
color: ${({ theme }) => theme.colors.textColor};
cursor: pointer;
& svg,path {
    color: ${({ theme }) => theme.colors.textColor};
}
& span {
    color: ${({ theme }) => theme.colors.textColorSecondary};
}
`
export const Div = styled.div`

max-width: 1324px;
width: 100%;
background-color: ${({ theme }) => theme.colors.backgroundSelected};;
min-height: calc(100vh - 80px);
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

`
export const FeedTitle = styled.h3`
color: ${({ theme }) => theme.colors.textColorSecondary};
text-transform: uppercase;
font-size: 32px;
font-weight: bold;
`
export const Post = styled.div`
border-radius: 20px;
padding: 0px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundSecondary};
width: 70%;
height: 500px;
`
export const PostUserContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
gap: 20px;


`
export const NameUser = styled.span`
color: ${({ theme }) => theme.colors.textColorSecondary};
font-size: 18px;
`
export const PostUser = styled.span`
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

}

`





