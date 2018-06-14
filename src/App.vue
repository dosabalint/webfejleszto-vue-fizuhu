<template>
    <div>
        <Navigation></Navigation>

        <index></index>

        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import index from './pages/index.vue';

export default {
    components: {
        Navigation,
        Footer,
        index
    }
};
</script>
