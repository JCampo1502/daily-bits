import defaultImg from '../../../assets/profile-icon.svg'
import { loadLinks } from './loadLinks';
export const setStatistics  = (user)=>{
    let totalQuestions = 0;
    let totalCorrects = 0;
    let totalHours = 0;
    
    for (const {correct,hours,total} of Object.values(user.game)) {
        totalQuestions  += total;
        totalCorrects   += correct;
        totalHours      += parseFloat(hours);
    }

    loadLinks(user);

    /* Set statistics */
    document.querySelector('#hours').textContent                = totalHours;
    document.querySelector('#numberOfQuestions').textContent    = totalQuestions;
    document.querySelector('#rightAnswers').textContent         = totalCorrects;
    document.querySelector('#wrongAnwers').textContent          = totalQuestions - totalCorrects;
    document.querySelector('.profile__name').textContent        = user.userName;
    document.querySelector('.profile__email').textContent       = user.email
    document.querySelector('.profile__img').setAttribute('src',user.img??defaultImg);
}