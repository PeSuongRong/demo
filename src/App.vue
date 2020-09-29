<template>
  <div id="app">
    <compHeader></compHeader>
    <router-view />
    <compFooter></compFooter>
  </div>
</template>

<script>
import compHeader from './components/compHeader.vue'
import compFooter from './components/compFooter.vue'

export default {
  name: 'App',
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style lang="scss">
  @import 'scss/all.scss';
</style>
