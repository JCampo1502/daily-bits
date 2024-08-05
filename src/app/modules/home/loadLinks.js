import { routes } from "../../constants";
import { circleTemplate } from "./util/circleTemplate";
import htmlImg from './../../../assets/html-icon.svg';
import jsImg from './../../../assets/javascript-icon.svg';
import cssImg from './../../../assets/css-icon.svg';

const gameSections = [
    ['js',jsImg,'Javascript'],
    ['css',cssImg,'CSS'],
    ['html',htmlImg,'HTML'],
]

export const loadLinks = (user)=>{
    const userGame = user?.game;    
    gameSections.forEach(([ext,image,name]) => {
        const game = userGame[ext];                        
        const container = document.querySelector(`.list__item--${ext}`)        
        let percentage = game&&Math.floor(game.correct/game.total*100)||0
        container.innerHTML = circleTemplate(percentage,{
            imgURL:image,
            name:name,
            category:ext
        });
    });
}