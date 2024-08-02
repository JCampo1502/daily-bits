const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghyjklmnopkrstuvwxyz1234567890_'
export const passwordGenerator =(maxlength = 8)=>{
    let randomPassword = '';
    for (let i = 0; i < maxlength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomPassword += chars[randomIndex];
    }
    return randomPassword;
}