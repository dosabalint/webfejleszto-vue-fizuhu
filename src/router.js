// vue router
import VueRouter from "vue-router";

// pages
import index from "./pages/index.vue";
import blog from "./pages/blog.vue";
import post from "./pages/post.vue";
import contact from "./pages/contact.vue";
import survey from "./pages/survey.vue";
import statistics from "./pages/statistics.vue";

import login from "./pages/login.vue";
import registration from "./pages/registration.vue";
import profile from "./pages/profile.vue";

// router
export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "index",
      path: "/",
      component: index
    },
    {
      name: "blog",
      path: "/blog",
      component: blog
    },
    {
      name: "blogCategory",
      path: "/blog/category/:categoryName",
      component: blog
    },
    {
      name: "blogPost",
      path: "/post/:postID",
      component: post
    },
    {
      name: "contact",
      path: "/contact",
      component: contact
    },
    {
      name: "survey",
      path: "/survey",
      component: survey
    },
    {
      name: "statistics",
      path: "/statistics",
      component: statistics
    },
    {
      name: "login",
      path: "/login",
      component: login
    },
    {
      name: "registration",
      path: "/registration",
      component: registration
    },
    {
      name: "profil",
      path: "/profil",
      component: profile
    }
  ]
});
