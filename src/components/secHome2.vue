<template>
  <section class="l-top1">
    <div class="l-container">
      <div class="l-top1--item">
        <div class="c-box c-box1">
          <figure>
            <img
              src="../assets/img-top1-small1.svg"
              class="hidden_pc"
              :alt="listSecHome2[0].title"
            >
          </figure>
          <dl>
            <dt>
              <h2>
                {{ listSecHome2[0].title }}<i
                  class="c-light"
                  data-animate-in="scale"
                  data-animate-in-delay="100"
                />
              </h2>
            </dt>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <dd v-html="listSecHome2[0].info" />
          </dl>
        </div>
        <div class="c-box c-box2">
          <figure>
            <img
              src="../assets/img-top1-small2.svg"
              class="hidden_pc"
              :alt="listSecHome2[1].title"
            >
          </figure>
          <dl>
            <dt>
              <h2>
                {{ listSecHome2[1].title }}<i
                  class="c-light"
                  data-animate-in="scale"
                  data-animate-in-delay="100"
                />
              </h2>
            </dt>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <dd v-html="listSecHome2[1].info" />
          </dl>
        </div>
        <div class="c-box c-box3">
          <figure>
            <img
              src="../assets/img-top1-small3.svg"
              class="hidden_pc"
              :alt="listSecHome2[2].title"
            >
          </figure>
          <dl>
            <dt>
              <h2>
                {{ listSecHome2[2].title }}<i
                  class="c-light"
                  data-animate-in="scale"
                  data-animate-in-delay="100"
                />
              </h2>
            </dt>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <dd v-html="listSecHome2[2].info" />
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
var listSecHome2 = [
    {
        title:"結婚に",
        info: "結婚式をもっと自由に。もっと楽しく。<br>どこでも、何度でも！<br>素敵な結婚式を増やします。"
    },
    {
        title:"住まいに",
        info: "住まいの売り買いって、難しそう。<br>もっと気軽に、もっと賢くできるはず。<br>住まいに対する疑問やストレスを減らします。"
    },
    {
        title:"お金に",
        info: "お金って身近だけど、よくわからない。<br>しかし、とても重要。<br>お金に関して「学ぶ」、「問題を解決する」ことを応援します。"
    },
]
export default {
  name: 'SecHome2',
  data () {
    return {
     listSecHome2: listSecHome2
    }
  }
}
</script>
