import '../scss/styles.scss';
import { routes } from './constants';
import { loadHome } from './modules/home/home';
import { loadAccount } from './modules/user/account';
import { getUserById } from './modules/user/services/getUser';

const path = location.pathname;
const localId = localStorage.getItem('user-id');
const user = await getUserById(localId);

document.addEventListener('DOMContentLoaded',()=>{
    switch (true) {
        case path !== routes.Account && !user:
            location.href = `..${loginPage}`;
            break;
        case path == routes.Account && user:
            location.href = homePage;
            break;
        case path == routes.Account:
            loadAccount();
            break;
        case path == routes.Home:
            loadHome(user,loginPage);
            break;
    }
})