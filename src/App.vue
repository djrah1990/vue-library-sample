<template>
  <div id="app">
    <img src="./assets/logo.png" @click="$router.push('/')" style="cursor:pointer;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'src/assets/css/main.scss';
</style>
