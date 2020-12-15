import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
// import router from './router/fakeRouter';
import store from './store';
import vuetify from './plugins/vuetify';
// import './router/permission';
// import { makeServer } from './mockApi/apiServer';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// if (process.env.NODE_ENV === 'development') {
//     makeServer();
// }

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
