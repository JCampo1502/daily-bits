import {routes} from "./../../constants";
import { getQuestions } from "./services/getQuestions";
import { startGame } from "./startGame";
import { getSavedGame, setFirstSave } from "./util/savedGame";
export const loadGame = async(user)=>{
    const args = new URLSearchParams(location.search);
    const category = args.get('category');
    const savedGame =getSavedGame(category);
    const questions =!savedGame && category && await getQuestions(category); 

    if(!category || (!questions && !savedGame))
    {
        location.href = `..${routes.Home}`;
    }    
    if(!savedGame)
    {
        setFirstSave(category,questions);
    }

    startGame(category,user);
}