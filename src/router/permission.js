import router from './index';
import store from '../store';

const role = store.state.user.role;

const routerHook = async (to, from, next) => {
    const hasToken = store.state.user.token;

    if (hasToken) {
        if (to.path === '/login') {
            console.log('login and has token !');
            next(`/${role}`);
        } else {
            console.log('other and has token !');
            next();
        }
    } else {
        console.log('without !');
        next();
    }
};

router.beforeEach(routerHook);
