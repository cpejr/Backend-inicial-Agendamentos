import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Inputsenha,
    Inputemail,
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
            <Title>LOGIN</Title>
            
                <Inputemail
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Inputsenha
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">ENTRAR</Button>
            
            <FooterText>
                Não tem um login? Faça o seu {" "}
                <LinkText onClick={() => navigate("/cadastro")}>
                    aqui.
                </LinkText>
            </FooterText>
        </Container>
    );
}
