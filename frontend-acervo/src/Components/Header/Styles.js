import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 1412px;
    height: 109px; /* Altura fixa do header */
    background: #FFE712;
    ;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    position: relative; /* Necessário para o posicionamento do logo */
    overflow: hidden; /* Garante que apenas a parte visível da logo apareça */
`;

export const LogoContainer = styled.div`
    position: absolute;
    width: 300px; /* Largura maior para aumentar o logo */
    height: 150px; /* Altura maior para o logo */
    top: -20px; /* Ajuste para centralizar visualmente */
    left: 48px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Mantém a proporção da imagem */
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: #333;
    font-size: 16px;

    &:hover {
        color: #007bff;
    }
`;
