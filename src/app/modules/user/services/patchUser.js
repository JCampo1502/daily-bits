import axios from "axios";
import { userAxiosInstance } from "../../../constants";
import { encryptUserPassword } from "../../auth/encryptPassword";

const keys = [
    'correct',
    'incorrect',
    'questions',
    'time',
    'userName',
    'password',
    'email',
    'img'
]

const getData = async(userData = {})=>{
    const data = {}

    for (const [key,value] of Object.entries(userData)) {
        if(!keys.includes(key) || !value) continue;

        let tempValue = value; 
        
        if(key === 'password')
        {
            tempValue = await encryptUserPassword(value);            
        }        

        data[key] = tempValue;
        
    }

    return data;
}

export const patchUser = async(id,data)=>{    
    data = await getData(data);       
    if(!id || Object.keys(data).length === 0)
    {
        throw new Error(`No se realizaron cambios`)
    }

    try {        
        const {data:user} = await userAxiosInstance.patch(`/${id}`,data);
        if(!user)
        {
            throw new Error('No se logro actualizar al usuario')
        }

        console.log(user);
        return {
            status:'OK',
            message:`Cambios guardados con exito.`
        };
    } catch (error) {
        return {
            status:'ERROR',
            message:`Error: ${error}`
        };
    }
}