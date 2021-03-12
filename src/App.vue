<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 100%;
}

body {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
