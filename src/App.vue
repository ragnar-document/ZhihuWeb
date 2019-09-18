<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #eee;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
}
</style>
