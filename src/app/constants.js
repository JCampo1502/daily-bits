import axios from "axios";
import { selecctionGameBehaviors, selecctionGameTemplate, selecctionMessageTemplate } from "./modules/game/util/selecctionGameTemplate";
import { draggableGameBehaviors, draggableGameTemplate } from "./modules/game/util/draggableGameTemplate";

const baseUrl = "http://localhost:8000";

export const emailParams = {
    ServiceId   : 'service_2wwgln9',
    FormId      : 'template_111rie2',
    PublicKey   : 'kASaS_Jz5JS72CYYH',
}

export const routes = {
    Home    : '/pages/home.html',
    Game    : '/pages/game.html',
    Account : '/',
}

export const userAxiosInstance = axios.create({
    baseURL: `${baseUrl}/user`
});

export const gameAxiosInstance = axios.create({
    baseURL: `${baseUrl}/game`
})

export const gameTypes = {
    1:{
        className:'game--selection',
        template:selecctionGameTemplate,
        behaviors: selecctionGameBehaviors,
        messageTemplate:{
            className:'message--selecction',
            template:selecctionMessageTemplate
        }
    },
    2:{
        className:'game--picture',
        template:selecctionGameTemplate,
        behaviors: selecctionGameBehaviors
    },
    3:{
        className:'game--sorting',
        template:draggableGameTemplate,
        behaviors:draggableGameBehaviors
    }
}