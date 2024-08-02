import emailjs from '@emailjs/browser';
import { emailParams } from '../../../constants';
const {ServiceId,FormId,PublicKey} = emailParams;
(function(){
    emailjs.init({
        publicKey: PublicKey
    })
})()

export const sendEmail = async({
    email,
    password,
    name,
})=>{
    const templateParams = {
        user_name:name,
        user_email:email,
        user_password:password        
    }
    const response = await emailjs.send(ServiceId,FormId,templateParams);   
    return response;
}