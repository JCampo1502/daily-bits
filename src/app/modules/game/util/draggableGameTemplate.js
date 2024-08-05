import Sortable from "sortablejs";
import { escapeCharacters } from "./escapeCharacters";

const setTaqColors = (values = '')=>{
    const symbolRegex = /&#61;|&#123;|&#125;|&lt;|&gt;|&#36;/g;
    const firstWord= /(?:&#61;|&#123;|&#125;|&lt;|&gt;|&#36;|!|\/)(\w+)\s*/g
    let text = escapeCharacters(values,false);    
    
    text = text.map(w=>w.replace(firstWord, (match)=>/* html */`<em class="em">${match}</em>`))
    .map(w=>w.replace(symbolRegex, (match)=>/* html */`<span class="symbol">${match}</span>`))
    .map((w)=>{        
        return /* html */`
        <p class="game__field">
            <strong class="game__value">
                ${w}
            </strong>
        </p>
        `;
    });
    return text.join(' ');
}

export const draggableGameTemplate = (values)=>{    
    const newValues = setTaqColors(values);
    return /* html */`    
        <div class="game__board">
            <div class="game__section"></div>
            <div class="game__section"></div>
            <div class="game__section"></div>
        </div>
        <div class="game__draggable">
            ${newValues}
        </div>            
    `;
}

export const draggableGameBehaviors = ()=>{            
    const formElment            = document.querySelector('.form');    
    const checkBtnElment        = document.querySelector('.form__btn');
    const sortables = [];

    document.querySelectorAll('.game__section').forEach(element => {
        sortables.push(new Sortable(element,{
            group:'game',
            animation:150
        }))
    })

    
    sortables.push(new Sortable(document.querySelector('.game__draggable'),{
        group:{
            name:'game',
            pull:'clone',
            put:false
        },
        filter:'.game__field--empty',
        animation:150,
        onClone: e=>{
            const origin = e.clone;
            const item = origin.querySelector('.game__value');            
            item.classList.add('game__value--disabled');
            origin.classList.add('game__field--empty')
            checkBtnElment.removeAttribute('disabled');
        },  
        sort: false      
    }))    

    return (answer)=>{        
        const userResponse = [];
        document.querySelectorAll('.game__board .game__field').forEach(element=>{
            userResponse.push(element.textContent.trim());
        })
        return userResponse.join('')==answer.join('')
    }
}