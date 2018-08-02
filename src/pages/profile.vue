<template>
  <pre>{{user}}</pre>
</template>

<script>
export default {
  name: "profile",
  computed: {
    user() {
      return this.$store.state.user || {};
    }
  }
};
</script>
