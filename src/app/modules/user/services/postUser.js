import { v4 as uuidv4 } from "uuid";
import { userAxiosInstance } from "../../../constants";
import { sendEmail } from "../util/sendEmail";
import { deleteUser } from "./deleteUser";
import { encryptUserPassword, passwordGenerator } from "../../auth/encryptPassword";
import { getUserByEmail } from "./getUser";



export const postUser =async ({
    userName,
    email,    
})=>{
    try {
        if(await getUserByEmail(email))
        {
            throw new Error("El usuario ya se encuentra registrado.");
            
        }
        const password = passwordGenerator();
        const {data:user} = await userAxiosInstance.post('/',{
            id: uuidv4(),
            userName,
            password:await encryptUserPassword(password),
            email,
            correct:0,
            incorrect:0,
            questions:0,
            time:0,
            game:{}
        })
        
        if(!user)
        {
            throw new Error('no fue posible registrar el usuario');
        }

        console.log(
            email,
            password,
            userName
        );
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