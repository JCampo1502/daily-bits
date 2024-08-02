import { logOut } from "./logOut";
import { setStatistics } from "./setStatitstics";
import { switchHomeSection } from "./switchHomeSection";
export const loadHome = (user)=>{
    setStatistics(user);
    switchHomeSection();
    logOut();
}