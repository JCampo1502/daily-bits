import { v4 as uuidv4 } from "uuid";
import { userAxiosInstance } from "../../../constants";
import { sendEmail } from "../util/sendEmail";
import { deleteUser } from "./deleteUser";
import { encryptUserPassword, passwordGenerator } from "../../auth/encryptPassword";



export const postUser =async ({
    userName,
    email,    
})=>{
    try {
        const password = passwordGenerator();
        const {data:user} = await userAxiosInstance.post('/',{
            id: uuidv4(),
            userName,
            password:await encryptUserPassword(password),
            email,
            correct:0,
            incorrect:0,
            questions:0,
            time:0
        })
        
        if(!user)
        {
            throw new Error('no fue posible registrar el usuario');
        }

        const response =await sendEmail({
            email,
            password:password,
            name:userName
        });
        if(response.text=='OK')
        {
            return `Se ha enviado la contraseña al correo: ${email}`
        }
        deleteUser(user.id);
        throw new Error('No ha sido posible contactar al usuario');
    } catch (error) {
        console.error(error)
        return error;
    }
};