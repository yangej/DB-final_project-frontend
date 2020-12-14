import store from '../store';
import router from '../router';

export function setInterceptor(axiosInstance) {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['token'] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        (response) => {
            response.data.result.token &&
                localStorage.setItem('token', response.data.result.token);
            return response.data;
        },
        async (error) => {
            await store.dispatch('user/logout');
            await router.push('/login');
            return Promise.reject(error);
        }
    );
}
