<template>
  <main
    id="info-history"
    class="page-second"
  >
    <section class="l-info-history">
      <div class="l-content">
        <h2 class="c-title3 text-center">
          <span>沿革</span><small class="mont">History</small>
        </h2>
        <div class="l-info--history__infor pdt15">
          <div
            v-for="(item,index) in listHistory"
            :key="index"
            class="p-item-history"
          >
            <h3>{{ item.tt }}</h3>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="item.info" />
          </div>
          <div class="l-list-link">
            <h3 class="u-pd--bt">
              2018年9月までの沿革
            </h3>
            <ul>
              <li
                v-for="(item, index) in listLink"
                :key="index"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
var listHistory = [
    {
        tt:'2020年',
        info: '<dl><dt>4月</dt><dd>ふくろう少額短期保険株式会社を子会社化し、くふう少額短期保険株式会社に商号変更</dd></dl>'
    },
     {
        tt:'2019年',
        info: '<dl><dt>7月</dt><dd>株式会社フルスロットルズを孫会社化</dd><dd>株式会社オウチーノの会社分割により、株式会社くらしにくふう設立</dd><dt>1月</dt><dd>株式会社Zaimを子会社化</dd></dl>'
    },
    {
        tt:'2018年',
        info: '<dl><dt>11月</dt><dd>株式会社Da Vinci Studio設立</dd><dd>株式会社保険のくふう設立</dd><dd>株式会社アールキューブを子会社化</dd></dl><dl><dt>10月</dt><dd>株式会社オウチーノと株式会社みんなのウェディングとの共同持株会社として、株式会社くふうカンパニーを設立</dd><dd>東京証券取引所マザーズ市場に上場</dd></dl>'
    }
]
var listLink = [
    {
        link:'https://www.mwed.co.jp/about',
        name:'株式会社みんなのウェディング'
    },
    {
        link:'https://corporate.o-uccino.jp/company/story/',
        name:'株式会社オウチーノ'
    }
]
export default {
  name: 'History',
  data () {
    return {
     listHistory: listHistory,
     listLink:listLink
    }
  }
}
</script>

<style lang="scss">

</style>
