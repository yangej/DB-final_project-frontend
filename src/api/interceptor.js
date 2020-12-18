import store from '../store';

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
        async (response) => {
            const result = response.data.result;

            if (result.status === 'fail') {
                await store.dispatch('popup/updatePopup', {
                    popupText: result.err,
                    imgSrc: '/img/disturb.svg',
                });
            } else {
                result.token && localStorage.setItem('token', result.token);
                return result;
            }
            return result;
        },
        async (error) => {
            return Promise.reject(error);
        }
    );
}
