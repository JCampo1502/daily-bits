import { userAxiosInstance } from "../../constants";

export const deleteUser = async(id)=>await userAxiosInstance.delete(`/${id}`);