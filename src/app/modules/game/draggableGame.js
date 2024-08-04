import Sortable from "sortablejs";

export const draggableGame = ()=>{        
    const draggableContainer = document.querySelector('.game__draggable');

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
        },  
        sort: false      
    }))    

    console.log(sortables);
}