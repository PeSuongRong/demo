<template>
  <main
    id="ir-disclosure_policy"
    class="page-second"
  >
    <section class="l-ir--disclosure_policy">
      <div class="l-content">
        <h2 class="c-title3 text-center">
          <span>ディスクロージャー・ポリシー</span><small class="mont">Disclosure Policy</small>
        </h2>
        <div
          v-for="(item,index) in listDis"
          :key="index"
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
  name: 'IrDisclosurePolicy',
  data () {
    return {
     listDis : []
    }
  },
  mounted(){
      // eslint-disable-next-line no-undef
      axios.get('../../data/disclosure_policy.json').then(
          response=> this.listDis = response.data
      )
  }
}
</script>
