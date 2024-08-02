import { routes } from "../../../constants";
export const saveUser = (id)=>{
    localStorage.setItem('user-id', id);
    location.href = routes.Home;
}