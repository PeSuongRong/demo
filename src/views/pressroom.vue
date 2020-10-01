<template>
  <main
    id="presroom"
    class="page-second"
  >
    <section class="l-presroom1">
      <h2 class="c-title3 text-center">
        <span>プレスルーム</span><small class="mont">Press Room</small>
      </h2>
      <div class="l-presroom1--menu flex flex-jus-center flex-align-item-center">
        <ul class="flex flex-jus-start">
          <li><span>最新1年分</span></li>
          <li>
            <a
              href="javascript:void(0)" 
            >2020</a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
            >2019</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-jus-center">
        <div class="l-presroom1--info">
          <ul class="l-news">
            <li
              v-for="(item, index) in listNew.slice(0,10)"
              :key="index"
            >
              <a
                :href="item.link"
                target="_blank"
              >
                <span class="date">{{ item.date }}</span>
                <span
                  v-for="(e, i) in item.cat"
                  :key="i"
                  class="category"
                >{{ e }}</span>
                <p>{{ item.text }}</p>
              </a>
            </li>
          </ul>
          <ul class="l-news">
            <li
              v-for="(item, index) in listNew"
              :key="index"
            >
              <a
                :href="item.link"
                target="_blank"
              >
                <span class="date">{{ item.date }}</span>
                <span
                  v-for="(e, i) in item.cat"
                  :key="i"
                  class="category"
                >{{ e }}</span>
                <p>{{ item.text }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="l-presroom1--btn text-center">
        <span class="c-btn2 flex flex-align-item-center flex-jus-center"><span>もっと見る</span></span>
      </div>
    </section>
    <section class="l-list-link">
      <div class="l-container">
        <h3>くふうカンパニーグループ各社の最新情報は下記をご参照ください</h3>
        <ul>
          <li>
            <a
              href="https://www.mwed.co.jp/press"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社みんなのウェディング</a>
          </li>
          <li>
            <a
              href="https://rcubeinc.com/press_blog/"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社アールキューブ</a>
          </li>
          <li>
            <a
              href="https://corporate.o-uccino.jp/news/"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社オウチーノ</a>
          </li>
          <li>
            <a
              href="https://www.sevensignatures.com/press"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社Seven Signatures International</a>
          </li>
          <li>
            <a
              href="https://zaim.co.jp/news/"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社Zaim</a>
          </li>
          <li>
            <a
              href="https://kurashi-kufu.com/list_news.html"
              target="_blank"
              rel="noopener noreferrer"
            >株式会社くらしにくふう</a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
// eslint-disable-next-line no-undef
window.axios = require('axios');
import $ from 'jquery'
export default {
  name: 'Pressrom',
  data () {
    return {
      listNew: []
    }
  },
  mounted(){
    // eslint-disable-next-line no-undef
    axios.get('http://localhost:8080/data/pressroom.json').then(
    response=> this.listNew = response.data
    ).then(
          $(document).ready(function(){
            $(".l-presroom1--btn .c-btn2").click(function(){
            $(this).hide();
            $(".l-presroom1--info .l-news+.l-news").show();
            $(".l-presroom1--info .l-news:first-child").hide();
        });
          })
    )
  },
}
</script>
