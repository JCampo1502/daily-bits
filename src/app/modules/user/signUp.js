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
        e.stopPropagation();
        const email = getEmail();
        const userName = getUserName();        
        if(!(email && userName && validateIfUserExist()))
        {
            if(email || userName)
            {
                alert("Debe ingresar un valor en los campos.");
            }
            else
            {
                alert(`El correo ${email} ya se encuentra en uso.`);
            }
            return;
        }
        const message = postUser({
            userName,
            email
        });
        alert(message);
    }
    signUpFormElment.addEventListener('submit',signUpUser)   
}