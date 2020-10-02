<template>
  <main
    id="ir-disclaimer"
    class="page-second"
  >
    <section class="l-ir--disclosure_policy">
      <div class="l-content">
        <h2 class="c-title3 text-center">
          <span>免責事項</span><small class="mont">Disclaimer</small>
        </h2>
        <div
          v-for="(item, i) in listDisclaimer"
          :key="i"
          class="l-ir--disclosure_policy__infor"
        >
          <h3>{{ item.tt }}</h3>
          <div class="l-ir--disclosure_policy__text">
            <p>{{ item.info }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// eslint-disable-next-line no-undef
window.axios = require('axios');

export default {
  name: 'Disclaimer',
  data () {
    return {
     listDisclaimer: []
    }
  },
  mounted(){
    // eslint-disable-next-line no-undef
    axios.get('../../data/disclaimer.json').then(
    response=> this.listDisclaimer = response.data
    )
  }
}
</script>
