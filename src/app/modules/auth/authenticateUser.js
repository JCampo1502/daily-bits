import { validatePassword } from "./encryptPassword";
import { userAxiosInstance } from "../../constants";
export const authenticateUser = async(email,password)=>{
    try {
        const {data:[user]} = await userAxiosInstance.get(`?email=${email}`);
        
        if(!user || !validatePassword(password,user.password)){
            return null;
        }
        return user.id;
    } catch (error) {
        return null;
    }
}