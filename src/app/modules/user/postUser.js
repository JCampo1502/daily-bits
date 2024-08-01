import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { userAxiosInstance } from "../../constants";


export const postUser =async ({
    userName,
    password,
    email,    
})=>await userAxiosInstance.post(userUrl,{
    id: uuidv4(),
    userName,
    password,
    email,
    correct:0,
    incorrect:0,
    questions:0,
    time:0
});