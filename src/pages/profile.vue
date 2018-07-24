<template>
    <pre>{{user}}</pre>
</template>

<script>
export default {
  name: "profil",
  computed: {
    user() {
      return this.$store.state.user || {};
    }
  }
};
</script>
