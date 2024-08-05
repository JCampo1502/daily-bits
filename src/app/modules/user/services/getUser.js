import { userAxiosInstance} from "../../../constants";
const getUserInfo = (user)=>{
    return {
        id          : user.id,   
        userName    : user.userName,
        email       : user.email,
        correct     : user.correct,
        incorrect   : user.incorrect,
        questions   : user.questions,
        time        : user.time,
        img         : user.img ?? null,
        game        : user.game
    }
}

const getOneUser = async(url)=>{
    try {
        const {data:[user]} = await userAxiosInstance.get(url);
        return getUserInfo(user);
    } catch (error) {
        return null
    }
}

export const getUserById = async(id)=>{
    try 
    {
        const {data:user} = await userAxiosInstance.get(`/${id}`);
        return getUserInfo(user);    
    } 
    catch (error) 
    {
        return null;   
    }    
}
export const getUserByEmail = (email)=>getOneUser(`?email=${email}`);