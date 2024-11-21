import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Inputsenha,
    Inputemail,
    InputNome,
    Inputcargo,
    InputRepitaSenha,
    Button,
    LinkText,
    Title,
    FooterText,
} from "./Styles"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Container>
            <Title>CADASTRO</Title>
            
                <InputNome
                    type = "nome"
                    placeholder="Nome"
                />   
                <Inputemail
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Inputcargo
                    type = "cargo"
                    placeholder="Cargo"
                />   
                <Inputsenha
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <InputRepitaSenha
                    type = "senha"
                    placeholder="Repita sua senha"
                />   
                <Button type="submit">CRIAR CONTA</Button>
            
            <FooterText>
                Já tem uma conta? Faça o seu login {" "}
                <LinkText onClick={() => navigate("/login")}>
                    aqui.
                </LinkText>
            </FooterText>
        </Container>
    );
}
