<template>
    <pre>{{user}}</pre>
</template>

<script>
export default {
  name: "profil",
  computed: {
    user() {
      return this.$root.$data.user || {};
    }
  }
};
</script>
