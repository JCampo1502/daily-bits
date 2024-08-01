import { userAxiosInstance} from "../../constants";

export const getUserById = async(id)=>await userAxiosInstance.get(`/${id}`);

export const authenticateUser = async(email,password)=>{
    const res = await userAxiosInstance.get(`?email=${email}`);
    const {data:[user]} =res;
    if(user && user.userName && user.email && password == user.password){
        return user;
    }
    return null;
}