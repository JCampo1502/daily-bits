import axios from "axios";
import { userAxiosInstance } from "../../constants";

export const patchUser = async(id,data)=>await userAxiosInstance.patch(`${userUrl}/${id}`,data);