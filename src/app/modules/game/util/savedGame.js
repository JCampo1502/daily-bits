export const removeSavedGame = (category)=>{
    localStorage.removeItem(`game-${category}`);
}

export const getSavedGame = (category)=>{
    const data = localStorage.getItem(`game-${category}`);
    const json = JSON.parse(data);
    return json;
}

export const setNewSave = (category, {
    timeFinal,        
    correct,
    incorrect,
    currentQuestionIndex
})=>{
    const savedGame = getSavedGame(category);
    const newSave = {
        ...savedGame,
        timeFinal,        
        correct,
        incorrect,
        currentQuestionIndex
    };

    localStorage.setItem(`game-${category}`,JSON.stringify(newSave));
}

export const setFirstSave = (category, questions)=>{
    localStorage.setItem(`game-${category}`,JSON.stringify({
        timeInitial:new Date(),
        timeFinal:null,
        questions,
        correct:0,
        incorrect:0,
        currentQuestionIndex:0
    }))
}