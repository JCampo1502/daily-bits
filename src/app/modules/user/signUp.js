import { showAlert } from "../../helpers/showAlert";
import { getUserByEmail } from "./services/getUser";
import { postUser } from "./services/postUser";


export const signUp = (alertElement,btnsElements)=>({
    signUpFormElment,
    getEmail,
    getUserName
})=>{
    const alert = showAlert(alertElement,btnsElements);
    const validateIfUserExist = async(email)=>await getUserByEmail(email)?false:true;
    const signUpUser = async e=>{
        e.preventDefault();
        const email = getEmail();
        const userName = getUserName();        
        if(!(email && userName && await validateIfUserExist(email)))
        {
            if(!email || !userName)
            {
                alert("Debe ingresar un valor en los campos.");
            }
            else
            {
                alert(`El correo ${email} ya se encuentra en uso.`);
            }
            return;
        }
        const message = await postUser({
            userName,
            email
        });
        alert(message);
        signUpFormElment.reset();
    }
    signUpFormElment.addEventListener('submit',signUpUser)   
}