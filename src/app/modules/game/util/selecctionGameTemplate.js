import character1 from './../../../../assets/caracters-1.png';
import character2 from './../../../../assets/caracters-2.png';
import character3 from './../../../../assets/caracters-3.png';
import character4 from './../../../../assets/caracters-4.png';
import { escapeCharacters } from './escapeCharacters';

const charactes = [
    character1,
    character2,
    character3,
    character4
]

const getCharacter = ()=>charactes[Math.floor(Math.random() * 4)];

export const selecctionGameTemplate = (values = [])=>{
    let html = /* html */'';

    values.forEach(({value,option,imgURL=null},i)=>{        
        const id = `selectionGameNumber-${i}`;
        let img = '';
        if(imgURL){
            img = /* html */`<img class="game__picture" src="${imgURL}" alt="image option">`;
        }
        html+= /* html */`
            <input type="radio" name="selectionGame" id="${id}" value="${value}" class="form__input">
            <label for="${id}" class="form__label form__label">
                ${img}
                <span class="form__option">${escapeCharacters(option)}</span>
            </label>
        `;
    })    
    return html;
}

export const selecctionMessageTemplate = (message)=>/* html */`
    <img class="message__character" src="${getCharacter()}" alt="character">
    <span class="message__description">
        ${message}
    </span> 
`;

export const selecctionGameBehaviors = ()=>{        
    const inputsElments         = document.querySelectorAll('.form input');
    const formElment            = document.querySelector('.form');    
    const checkBtnElment        = document.querySelector('.form__btn');
    
    formElment.addEventListener('change',()=>{
        checkBtnElment.removeAttribute('disabled');
    },{
        once:true
    })

    return (answer)=>{
        const value = formElment.selectionGame.value;
        inputsElments.forEach(input =>input.setAttribute('disabled', true));
        return value == answer.value;
    }
}