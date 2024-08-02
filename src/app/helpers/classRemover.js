export const classRemover = (exeptionIndex = 0, classes = [], elements = [])=>{
    elements.forEach((element,i)=>{
        if(i != exeptionIndex){
            element.classList.remove(...classes);
        }
    })
}