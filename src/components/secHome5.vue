<template>
  <section class="l-top4">
    <div class="l-container">
      <h2 class="c-title2">
        ニュース<small class="mont">News</small>
      </h2>
      <ul class="l-news">
        <li
          v-for="(item, index) in listNew.slice(0,5)"
          :key="index"
        >
          <a
            :href="item.link"
            target="_blank"
          >
            <span class="date">{{ item.date }}</span><span
              v-if="item.isPDF"
              class="category"
            >IR</span><span
              v-else
              class="category"
            >PR</span>
            <p>{{ item.text }}<i class="u-pdf" /></p>
          </a>
        </li>
      </ul>
      <div class="c-list-btn flex flex-jus-center flex-container">
        <router-link
          class="c-btn1"
          to="/about/pressroom"
        >
          プレスルームはこちら
        </router-link><router-link
          class="c-btn1"
          to="/about/ir/news"
        >
          IRニュースはこちら
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
// eslint-disable-next-line no-undef
window.axios = require('axios');

export default {
  name: 'SecHome5',
  data () {
    return {
     listNew: []
    }
  },
  mounted(){
    // eslint-disable-next-line no-undef
    axios.get('./data/pressroom.json').then(
      response=> this.listNew = response.data
    )
  }
}
</script>

