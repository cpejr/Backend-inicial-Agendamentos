import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function AppLayout() {
    return(
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}