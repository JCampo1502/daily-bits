export const pictureGameTemplate = (values = [])=>{
    let html = /* html */`<div class="game game--picture">`;
    values.forEach(({value,option,imgURL},i)=>{
        const id = `pictureGameNumber-${i}`
        html+= /* html */`        
            <input type="radio" name="pictureGame" id="${id}" value="${value}" class="form__input">
            <label for="${id}" class="form__label form__label">
                <img class="game__picture" src="${imgURL}" alt="image option">
                <span class="form__option">${option}</span>
            </label>        
        `;
    })
    html = /* html */`</div>`;
    return html;
}

export const pictureGameMessageTemplate = (message)=>{
    return /* html */`
        <p class="message message--picture">
            <span class="message__description">
                ${message}
            </span>
        </p>
    `;
}