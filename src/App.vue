<template>
    <div>
        <Navigation :itemCollection="navItems"></Navigation>

		<router-view></router-view>

        <Footer></Footer>
    </div>
</template>

<script>
// components
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',

    components: {
        Navigation,
        Footer
    },

	data: function() {
        return {
            navItems: []
        };
    },

    created() {
        this.navItems.push({
            name: 'Főoldal',
            id: 'index',
            path: '/'
        });
        this.navItems.push({
            name: 'Blog',
            id: 'blog',
            path: '/blog'
        });
        this.navItems.push({
            name: 'Kapcsolat',
            id: 'kapcsolat',
            path: '/contact'
        });
    }
};
</script>

