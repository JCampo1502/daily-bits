import { authenticateUser } from "../auth/authenticateUser";
import { saveUser } from "./util/saveUser";
import { showAlert } from "../../helpers/showAlert";

export const logIn = (alertElement,btnsElements)=>({
    logInFormElement,
    getPassword,
    getEmail
})=>{
    const alert = showAlert(alertElement,btnsElements);

    const loginUser = async e=>{
        e.preventDefault();  
        const password = getPassword();
        const email = getEmail();
        const id = password && email && await authenticateUser(email, password);

        if(!(id))
        {
            if(!password || !email)
            {
                alert("Debe ingresar un valor en los campos.");
            }
            else
            {
                alert("El correo o la contraseña no son validos.");
            }
            return
        }    
        saveUser(id);    
    }

    logInFormElement.addEventListener('submit',loginUser)        
}