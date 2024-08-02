import { logIn } from "./login";
import { signUp } from "./signUp";

export const loadAccount = ()=>{
    const alertElment = document.querySelector('.alert');
    const submitBtnsElments = document.querySelectorAll('.form__submit');
    const logInFormElement = document.querySelector(".form--account");
    const signUpFormElment = document.querySelector('.form--register');
    const getLowerCaseValue = (element) => element.value.toLowerCase();
    const loadBtnsAndAlert = (fn)=>fn(alertElment,submitBtnsElments);
    loadBtnsAndAlert(logIn)(
        {
            logInFormElement,        
            getPassword: ()=>logInFormElement.password.value,
            getEmail: ()=>getLowerCaseValue(logInFormElement.email)
        }
    );

    loadBtnsAndAlert(signUp)(
        {
            signUpFormElment,    
            getEmail: ()=>getLowerCaseValue(signUpFormElment.registerEmail),
            getUserName: ()=>getLowerCaseValue(signUpFormElment.registerUserName)
        }
    );
}

