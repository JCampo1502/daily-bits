import { routes } from "../../constants";

export const logOut = ()=>{
    document.querySelector('.profile__close').addEventListener('click',()=>{
        localStorage.removeItem('user-id');
        location.href = `..${routes.Home}`;
    })
}