<template>
    <div>
        <Navigation :itemCollection="navItems" @pageChange="OnPageChange"></Navigation>

				<keep-alive>
					<component :is="currentPage"></component>
				</keep-alive>

        <Footer></Footer>
    </div>
</template>

<script>
// components
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

// pages
import index from "./pages/index.vue";
import blog from "./pages/blog.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
    index,
    blog
  },

  data: function() {
    return {
      currentPage: "blog",
      navItems: []
    };
  },

  created() {
    this.navItems.push({
      name: "Főoldal",
      id: "index"
    });
    this.navItems.push({
      name: "Blog",
      id: "blog"
    });
  },

  methods: {
    OnPageChange(newPage) {
      this.currentPage = newPage;
    }
  }
};
</script>

