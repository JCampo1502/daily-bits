import { userAxiosInstance} from "../../../constants";
const getOneUser = async(url)=>{
    try {
        const {data:[user]} = await userAxiosInstance.get(url);
        return user;
    } catch (error) {
        return null
    }
}

export const getUserById = (id)=>getOneUser(`/${id}`);
export const getUserByEmail = (email)=>getOneUser(`?email=${email}`);