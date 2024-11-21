import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif; 
  }
`;



export const Container = styled.div`
    width: 1280px;
    height: 832px;
    gap: 0px;
    opacity: 0px;
    display: flex;
    background-color: black;
    margin: 0 auto;
`;


export const Inputsenha = styled.input`
    width: 567px;
    height: 49px;
    position: absolute;
    top: 522px;
    left: 356px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const Inputemail = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 373px;
    left: 356px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const InputRepitaSenha = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 600px;
    left: 356px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;


    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const InputNome = styled.input`
    width: 567px;
    height: 49px;
    position: absolute;
    top: 297px;
    left: 356px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const Inputcargo = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 449px;
    left: 356px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;


export const Button = styled.button`
    width: 251px;
    height: 57px;
    position: absolute;
    top: 712px;
    left: 514px;
    gap: 0px;
    border-radius: 20px 20px 20px 20px;
    opacity: 0px;

    font-family: 'Roboto', sans-serif; 
    font-size: 32px;
    font-weight: 600;
    line-height: 37.5px;

    color: black;
    background: #FFE712;
    border: none;
    cursor: pointer;

    &:hover {
        background: #FFE712;
    }
`;

export const LinkText = styled.a`
    width: 331px;
    height: 23px;
    top: 586px;
    left: 474px;
    gap: 0px;
    opacity: 0px;

    color: #FFE712;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Title = styled.h1`
    width: 250px;
    height: 60px;
    position: absolute;
    top: 193px;
    left: 515px;
    gap: 0px;
    opacity: 0px;
    font-family:'Roboto', sans-serif; 
    font-size: 48px;
    font-weight: 600;
    line-height: 56.25px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;

export const FooterText = styled.p`
    width: 331px;
    height: 23px;
    position: absolute;
    top: 674px;
    left: 474px;
    gap: 0px;
    opacity: 0px;

    font-size: 14px;
    text-align: center;
    color: #777;
`;
