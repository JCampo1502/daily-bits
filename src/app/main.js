import '../scss/styles.scss'
import { classRemover } from './helpers/classRemovers';
import { showAlert } from './helpers/showAlert';
import { switchSections } from './helpers/switchSections';
import { authenticateUser, getUserById } from './modules/user/getUser';

const path = location.pathname;
const homePage = '/pages/home.html';
const loginPage = '/';

const localId = localStorage.getItem('user-id');
let user = null;
if(localId){    
    user = (await getUserById(localId)).data;    
}

if(path == loginPage){
    console.log(path);
    if(user){
        location.href = homePage;
    }
    const alert = document.querySelector('.alert');
    const submitBtn = document.querySelector('.form__submit');
    const loginForm = document.querySelector(".form--account");
    const password = loginForm.password;
    const email = loginForm.email;
    
    
    loginForm.addEventListener('submit',async e=>{
        e.preventDefault();  
        const passwordValue = password.value.toLowerCase();
        const emailValue = email.value.toLowerCase();               
        if(!passwordValue || !emailValue){
            showAlert(alert, "Debe ingresar un valor en los campos.",[submitBtn])
            return;                
        };
        const user=await authenticateUser(emailValue, passwordValue);
        if(user){
            localStorage.setItem('user-id', user.id);
            location.href = homePage;
        }else{
            showAlert(alert, "El correo o la contraseña no son validos.",[submitBtn])
        }
        
    })        
}else if(path == homePage){
    console.log(path);
    if(!user)location.href = `..${loginPage}`;

    const categoriesBtn = document.querySelector('.nav__item--categories');
    const statisticsBtn = document.querySelector('.nav__item--statistics');
    const profileBtn = document.querySelector('.nav__item--profile');
    const sections  = document.querySelectorAll('.main__section');
    const btns = document.querySelectorAll('.header .nav__item');
    const switchActiveBtn = (i, element)=>{
        element.addEventListener('click',()=>{
            element.classList.add('nav__item--active');
            switchSections(i,sections);
            classRemover(i,['nav__item--active'],btns);
        })};        
    switchActiveBtn(0,categoriesBtn);
    switchActiveBtn(1,statisticsBtn);
    switchActiveBtn(2,profileBtn);
    
    document.querySelector('#hours').textContent = user.time;
    document.querySelector('#numberOfQuestions').textContent = user.questions;
    document.querySelector('#rightAnswers').textContent = user.correct;
    document.querySelector('#wrongAnwers').textContent = user.incorrect;
    document.querySelector('.profile__name').textContent = user.userName;
    document.querySelector('.profile__email').textContent = user.email
    document.querySelector('.profile__img').setAttribute('src',user.img);
    document.querySelector('.profile__close').addEventListener('click',()=>{
        localStorage.removeItem('user-id');
        location.href = `..${loginPage}`;
    })
}