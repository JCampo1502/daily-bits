import { gameTypes, routes } from "../../constants";
import { patchUser } from "../user/services/patchUser";
import { escapeCharacters } from "./util/escapeCharacters";
import { getSavedGame, removeSavedGame, setNewSave } from "./util/savedGame";

export const startGame  = (category,user)=>{
    const savedGame             = getSavedGame(category);    
    const gameElment            = document.querySelector('.game');    
    const formElment            = document.querySelector('.form');
    const checkBtnElment        = document.querySelector('.form__btn');
    const alertElement          = document.querySelector('.alert');
    const alertMessageElement   = document.querySelector('.alert__message');
    const livesElement          = document.querySelector('.lives__count');
    const progressBarElement    = document.querySelector('.progress-bar');
    
    const index                 = savedGame.currentQuestionIndex;
    const lives                 = savedGame.incorrect>4 ?0 :4 - savedGame.incorrect;
    const questionsLen          = savedGame.questions.length;
    const progress              = (100/questionsLen)*index;

    if(index >= savedGame.questionsLen - 1)
    {        
        location.href=routes.Home;
        removeSavedGame(category);
    }

    const {
        type,
        options,
        answer,
        question
    }   = savedGame.questions[index];
    
    const {
        className,
        template,
        behaviors,
        messageTemplate = null
    }   = gameTypes[type];    
    
    const correctOption         = options.find(x => x.value ==answer);
    
    gameElment.classList.add(className);
    gameElment.innerHTML            = template(options);
    livesElement.textContent        = lives;
    progressBarElement.style.width  = `${progress}%`;        
    const validate                  = behaviors();
    
    if(messageTemplate)
    {        
        const messageElement        = document.querySelector('.message');
        messageElement.innerHTML    = messageTemplate.template(question);
        messageElement.classList.add(messageTemplate.className);
    }
    else
    {
        const messageElement        = document.querySelector('.message__description');
        messageElement.textContent  = question;
    }            

    checkBtnElment.addEventListener('click',()=>{        
        alertElement.classList.remove('alert--hidden');
        alertElement.classList.add('alert--show');        

        if(validate(correctOption??answer))
        {            
            alertMessageElement.textContent="¡Buen trabajo!"
            savedGame.correct++;
        }
        else
        {
            formElment.classList.add('form--wrong');            
            alertMessageElement.innerHTML = /* html */`
                <strong>La respuesta correcta es:</strong><<br/>
                ${escapeCharacters(correctOption?.option??answer)}
            `;
            savedGame.incorrect++;
        }
        
        savedGame.currentQuestionIndex++;
        savedGame.timeFinal = new Date();
        
        setNewSave(category,savedGame);
    })

    formElment.addEventListener('submit',e=>{
        e.preventDefault();
        if(index == questionsLen - 1){
            const finalDate = new Date();
            const initialDate = new Date(savedGame.timeInitial);
            const data = {[category]:{
                total:savedGame.questions.length,
                correct:savedGame.correct,
                hours:((finalDate - initialDate)/( 1000 * 60 * 60)).toFixed(1),
            }};            
            patchUser(user.id,{game:{...user.game,...data}});
            removeSavedGame(category);
            location.href=routes.Home;            
        }else{
            location.href=`${routes.Game}?category=${category}`;
        }
    })
}