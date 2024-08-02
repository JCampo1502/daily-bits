import bcrypt from 'bcryptjs';
export const encryptPassword =(password)=>{
    const salt = bcrypt.genSalt(10);
    return bcrypt.hashSync(password,salt);
}

export const validatePassword = (password,hash)=>{
    return bcrypt.compareSync(password,hash);
}