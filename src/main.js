// CSS
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

// JS
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

// init
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

import DataService from './DataService';

DataService.PostContactMessage({
    name: 'Demo Felhasználó',
    email: 'demo@email.hu'
}).then(success => {
    if (success) {
        console.log('sikeresen lefutott az üzenetküldés');
    } else {
        console.log('sikertelen beküldés');
    }
});
