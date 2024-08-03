import { routes } from "../../../constants";

export const logOut = ()=>{    
    localStorage.removeItem('user-id');
    location.href = `..${routes.Home}`;    
}