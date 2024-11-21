import Logo from "./cpe-logo.png"
import React from "react"
import { HeaderContainer, LogoContainer} from "./Styles";

export default function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="Logo" />;
            </LogoContainer>
        </HeaderContainer>
    );
}
