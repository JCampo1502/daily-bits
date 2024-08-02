import { switchSections } from "../../../helpers/switchSections";

export const switchActiveSection =(sectionsElments,btns)=> (i, element)=>{
    element.addEventListener('click',()=>{
        element.classList.add('nav__item--active');
        switchSections(i,sectionsElments);
        classRemover(i,['nav__item--active'],btns);
    })};