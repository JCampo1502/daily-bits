import axios from "axios";

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
})