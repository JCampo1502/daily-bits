export const saveUser = (id)=>{
    localStorage.setItem('user-id', id);
    location.href = homePage;
}