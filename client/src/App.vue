<template>
  <signup-page></signup-page>
</template>

<script>
import SignupPage from "./pages/SignupPage.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SignupPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
