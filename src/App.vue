<template>
    <div>
        <Navigation></Navigation>

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
    }
};
</script>

