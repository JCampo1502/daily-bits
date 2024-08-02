import { validatePassword } from "./encryptPassword";

export const authenticateUser = async(email,password)=>{
    const user = await getUserByEmail(email);        
    if(!user || !validatePassword(password,user.password)){
        return null;
    }
    return user.id;
}