export const validateImageURL = (userURL)=>{            
    try {
        const url = new URL(userURL);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}