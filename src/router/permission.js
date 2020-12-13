import router from './index';
import store from '../store';

const role = store.state.user.role;

const routerHook = async (to, from, next) => {
    const hasToken = store.state.user.token;

    if (hasToken) {
        if (to.path === '/login') {
            next(`/${role}`);
        } else {
            next();
        }
    } else {
        next();
    }
};

router.beforeEach(routerHook);
