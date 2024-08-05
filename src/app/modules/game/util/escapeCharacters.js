const replaceCharacters = (text)=>{
    return text.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const escapeCharacters = (text = [], join=true)=>{
    if(typeof text === 'number')
    {
        return text;
    }

    if (typeof text === 'string') 
    {
        return replaceCharacters(text);
    }

    const response = text.map(t => replaceCharacters(t));
    if(join){
        return response.join(' '); 
    }
    return response;
}