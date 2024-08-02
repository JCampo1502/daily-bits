import bcrypt from 'bcryptjs';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghyjklmnopkrstuvwxyz1234567890_'

export const encryptUserPassword =async (password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash =await bcrypt.hash(password,salt);
    return hash;
}

export const validatePassword = (password,hash)=>{
    return bcrypt.compareSync(password,hash);
}

export const passwordGenerator =(maxlength = 8)=>{
    let randomPassword = '';
    for (let i = 0; i < maxlength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomPassword += chars[randomIndex];
    }
    return randomPassword;
}