import '../scss/styles.scss';
import { routes } from './constants';
import { loadHome } from './modules/home/home';
import { loadAccount } from './modules/user/account';
import { getUserById } from './modules/user/services/getUser';

const path = location.pathname;
const localId = localStorage.getItem('user-id');
const user = localId && await getUserById(localId);

switch (true) {
    case (path !== routes.Account && !user):
        location.href = `..${routes.Account}`;
        break;
    case (path == routes.Account && user != null):
        location.href = routes.Home;
        break;
    case path == routes.Account:
        loadAccount();
        break;
    case path == routes.Home:
        loadHome(user);
        break;
    default:
        console.log('entro5');
        break
}