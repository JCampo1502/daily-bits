import character1 from './../../../../assets/caracters-1.png';
import character2 from './../../../../assets/caracters-2.png';
import character3 from './../../../../assets/caracters-3.png';
import character4 from './../../../../assets/caracters-4.png';

const charactes = [
    character1,
    character2,
    character3,
    character4
]

const getCharacter = ()=>charactes[Math.floor(Math.random * 4)];

export const SelecctionGameTemplate = (values = [])=>{
    let html = /* html */`<div class="game game--selection">`;

    values.forEach(({value,option},i)=>{
        const id = `selectionGameNumber-${i}`;
        html+= /* html */`
            <input type="radio" name="selectionGame" id="${id}" value="${value}" class="form__input">
            <label for="${id}" class="form__label form__label">
                <span class="form__option">${option}</span>
            </label>
        `;
    })    

    html += /* html */`</div>`;
    return html;
}

export const selecctionMessageTemplate = (message)=>{
    /* html */`
    <p class="message message--selecction">
        <img class="message__character" src="${getCharacter()}" alt="character">
        <span class="message__description">
            ${message}
        </span>
    </p> 
`;
}