export const showAlert = (alertElement,btns)=>(message)=>{
    alertElement.innerHTML = `<p class="alert__message">${message}</p>`;
    alertElement.classList.remove('alert--show');
    alertElement.classList.add('alert--show');
    btns.forEach(btn => {
        btn.classList.add('disable');
        btn.setAttribute('disabled','');
    });
    setTimeout(()=>{
        alertElement.classList.remove('alert--show');
        btns.forEach(btn => {
            btn.classList.remove('disable');
            btn.removeAttribute('disabled');
        });
    },2200)
}