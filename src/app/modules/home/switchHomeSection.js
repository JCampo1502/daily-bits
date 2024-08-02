import { switchActiveSection } from "./util/switchActiveSection";

export const switchHomeSection = ()=>{
    const categoriesBtnsElements = document.querySelector('.nav__item--categories');
    const statisticsBtnsElements = document.querySelector('.nav__item--statistics');
    const profileBtnsElments     = document.querySelector('.nav__item--profile');
    const sectionsElments        = document.querySelectorAll('.main__section');
    const btns                   = document.querySelectorAll('.header .nav__item');   
    const switchSections         = switchActiveSection(sectionsElments,btns)
        
    /* switch Active View */    
    switchSections(0,categoriesBtnsElements);
    switchSections(1,statisticsBtnsElements);
    switchSections(2,profileBtnsElments);
}