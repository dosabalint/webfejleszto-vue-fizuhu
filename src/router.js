// vue router
import VueRouter from 'vue-router';

// pages
import index from './pages/index.vue';
import blog from './pages/blog.vue';

// router
export default new VueRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: index
        },
        {
            name: 'blog',
            path: '/blog',
            component: blog,
            children: [
                {
                    name: 'blogCategory',
                    path: 'category/:categoryName',
                    component: blog
                }
            ]
        }
    ]
});
