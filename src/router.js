// vue router
import VueRouter from 'vue-router';

// pages
import index from './pages/index.vue';
import blog from './pages/blog.vue';

// router
export default new VueRouter({
    routes: [
        { path: '/', component: index },
        { path: '/blog', component: blog }
    ]
});
