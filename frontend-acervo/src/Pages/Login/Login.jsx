import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    return (

        <div>
            ESSA É A PÁGINA DE LOGIN
            <BotaoPadrao
            onClick={() => navigate("/")}
            >

            </BotaoPadrao>

        </div>
    )
}

export default Login;