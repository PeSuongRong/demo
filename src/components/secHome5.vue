<template>
  <section class="l-top4">
    <div class="l-container">
      <h2 class="c-title2">
        ニュース<small class="mont">News</small>
      </h2>
      <ul class="l-news">
        <li
          v-for="(item, index) in list"
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
        <a
          class="c-btn1"
          href="/about/pressroom"
        >プレスルームはこちら</a><a
          class="c-btn1"
          href="/about/ir/news"
        >IRニュースはこちら</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SecHome5',
  props: {
      // eslint-disable-next-line vue/require-default-prop
      list: Array
  },
  data () {
    return {
     
    }
  }
}
</script>

