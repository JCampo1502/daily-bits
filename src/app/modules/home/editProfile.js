import { validateImageURL } from "../../helpers/validateImageURL";
import { showAlert } from "../../helpers/showAlert";
import defaultImage from "./../../../assets/profile-icon.svg";
import { patchUser } from "../user/services/patchUser";
import { authenticateUser } from "../auth/authenticateUser";
import { getUserByEmail } from "../user/services/getUser";
import {logOut} from "./util/logOut";

export const editProfile = (user)=>{
    const alertElment  = document.querySelector('.alert');
    const BtnsElemnts = document.querySelectorAll('.form__submit');

    const imageContainer = document.querySelector('.profile__img--edit');

    const editForm = document.querySelector('.form--profile');
    const imageInputElment = editForm.profileImage;
    const userNameInputElment = editForm.profileUserName;
    const emailInputElment = editForm.profileEmail;
    const newPasswordInputElment = editForm.profileNewPassword;
    const PasswordInputElment = editForm.profilePassword;

    const alert = showAlert(alertElment, BtnsElemnts);
    const validateImage = (userURL)=>{
        if(!userURL)return null;
        if(!validateImageURL(userURL))
            {
                alert('El formato de la imagen no es permitido');
                imageContainer.setAttribute('src',user.img??defaultImage);
                return null;
            }
        imageContainer.setAttribute('src',userURL);
        return userURL;
    }

    imageInputElment.addEventListener('input',()=>{
        const userURL = imageInputElment.value;
        validateImage(userURL);
    })

    document.querySelector('.profile__close').addEventListener('click',()=>{        
        logOut();    
    })

    editForm.addEventListener('submit',async e=>{        
        e.preventDefault();
        const image =validateImage(imageInputElment.value) ;
        const userName = userNameInputElment.value.toLowerCase();
        const email = emailInputElment.value.toLowerCase();
        const newPassword = newPasswordInputElment.value;
        const password = PasswordInputElment.value;

        if(!await authenticateUser(user.email,password))
        {
            alert('Contraseña incorrecta.');
            return;
        }
        if(email && email!=user.email && await getUserByEmail(email))
        {
            alert(`El correo ${email} ya se encuentra en uso`);
        }
        const res = await patchUser(user.id, {
            img:image,
            userName,
            password:newPassword,
            email 
        });
        alert(res.message);
        if(res.status === 'OK'){
            logOut();
        }
    })
} 