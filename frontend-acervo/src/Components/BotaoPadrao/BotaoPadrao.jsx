import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao(props) {

    return (
        <div>
            <StyleBotaoPadrao onClick={props.onClick}>
                Redirecionar
            </StyleBotaoPadrao>
        </div>
    )
}

export default BotaoPadrao;