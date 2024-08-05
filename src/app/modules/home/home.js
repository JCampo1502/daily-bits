import { editProfile } from "./editProfile";
import { setStatistics } from "./setStatitstics";
import { switchHomeSection } from "./switchHomeSection";
export const loadHome = (user)=>{    
    setStatistics(user);
    switchHomeSection();
    editProfile(user);    
}