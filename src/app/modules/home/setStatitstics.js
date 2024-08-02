export const setStatistics  = (user)=>{
    /* Set statistics */
    document.querySelector('#hours').textContent                = user.time;
    document.querySelector('#numberOfQuestions').textContent    = user.questions;
    document.querySelector('#rightAnswers').textContent         = user.correct;
    document.querySelector('#wrongAnwers').textContent          = user.incorrect;
    document.querySelector('.profile__name').textContent        = user.userName;
    document.querySelector('.profile__email').textContent       = user.email
    document.querySelector('.profile__img').setAttribute('src',user.img);
}