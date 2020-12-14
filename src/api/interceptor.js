export function setInterceptor(axiosInstance) {
    axiosInstance.interceptors.request.use(
        (config) => {
            console.log('request fulfill');
            const token = localStorage.getItem('token');
            console.log('request', token);

            if (token) {
                config.headers['token'] = token;
            }

            return config;
        },
        (error) => {
            console.log('request error');
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        (response) => {
            response.data.token &&
                localStorage.setItem('token', response.data.token);
            return response.data;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}
