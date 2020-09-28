<template>
  <div id="app">
    <CompHeader></CompHeader>
    <router-link to="/contact">Contact</router-link>
    <router-view />
    <CompFooter></CompFooter>
  </div>
</template>

<script>
import CompHeader from './components/compHeader'
import CompFooter from './components/compFooter'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    CompHeader,
    CompFooter

  },
  mounted(){
  
  }
}
</script>
<style lang="scss">
@import './css/all.scss';
</style>