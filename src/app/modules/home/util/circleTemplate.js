export const circleTemplate = (percentage = 0,{imgURL, name,category})=>{
    const percentageValue =!percentage && 450 || Math.round(450 - 260 * (percentage/100));    
    
    return/* html */`
        <div class="circle__container d-flex flex-column text-center text-secondary">
            <a class="skill" href="./game.html?category=${category}">
                <div class="outer">
                    <div class="inner">
                        <img class="icon" src="${imgURL}" alt="css icon">
                    </div>
                </div>
            </a>            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="96px" height="96px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#DA22FF"></stop>
                        <stop offset="100%" stop-color="#9733EE"></stop>
                    </linearGradient>
                </defs>
                <circle cx="48" cy="48" r="43" stroke-linecap="round" stroke-dashoffset="${percentageValue}"/>
            </svg>

            <strong class="list__description list__description--category">
                ${name}
            </strong>
        </div>
    `;
}