<template>
  <main
    id="ir"
    class="page-second"
  >
    <section class="l-ir1">
      <h2 class="c-title3 text-center">
        <span>株主・投資家情報</span><small class="mont">Investor Relations</small>
      </h2>
      <figure class="c-mv">
        <img
          src="../../assets/about/ir/mv.jpg"
          alt="株主・投資家情報"
        >
      </figure>
    </section>
    <section class="l-ir2">
      <h3 class="c-title4">
        最新IRニュース
      </h3>
      <div class="flex flex-jus-center">
        <div class="l-ir2--info">
          <ul class="l-news">
            <li>
              <a
                href="/files/2020082807052003981.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="date">2020/8/28</span><span class="category">リリース</span>
                <p>特別損失の計上に関するお知らせ<i class="u-pdf" /></p>
              </a>
            </li>
            <li>
              <a
                href="/files/2020081206270200067.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="date">2020/8/12</span><span class="category">リリース</span>
                <p>投資事業有限責任組合の設立に関するお知らせ<i class="u-pdf" /></p>
              </a>
            </li>
            <li>
              <a
                href="/files/2020081206263207205.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="date">2020/8/12</span><span class="category">リリース</span>
                <p>業績予想に関するお知らせ<i class="u-pdf" /></p>
              </a>
            </li>
            <li>
              <a
                href="/files/2020081206064301568.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="date">2020/8/12</span><span class="category">決算情報</span>
                <p>株式会社くふうカンパニー第2期第3四半期決算説明資料<i class="u-pdf" /></p>
              </a>
            </li>
            <li>
              <a
                href="/files/2020081206061608627.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span class="date">2020/8/12</span><span class="category">決算情報</span>
                <p>株式会社くふうカンパニー第2期第3四半期報告書<i class="u-pdf" /></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="l-ir2--btn text-center">
        <a
          class="c-hover1 c-hover1--target"
          href="../../about/ir/news/latest_year"
        >IRニュース一覧はこちら</a>
      </div>
      <h3 class="c-title4">
        最新の決算資料
      </h3>
      <div class="l-ir2--box">
        <h4 class="c-title5 text-center">
          2020年9月期 第3四半期 決算資料
        </h4>
        <ul class="c-ul1">
          <li>
            <a
              href="/files/2020081206053604682.pdf"
              class="c-hover1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>決算短信<i class="u-pdf" /></p>
            </a>
          </li>
          <li>
            <a
              href="/files/2020081206064301568.pdf"
              class="c-hover1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>決算説明資料<i class="u-pdf" /></p>
            </a>
          </li>
          <li>
            <a
              href="/files/2020081206061608627.pdf"
              class="c-hover1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>四半期報告書<i class="u-pdf" /></p>
            </a>
          </li>
          <li>
            <a
              class="c-hover1"
              href="files/2020081219270200067.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>決算説明会（質疑応答）<i class="u-pdf" /></p>
            </a>
          </li>
        </ul>
      </div>
      <h3 class="c-title4">
        IRライブラリ
      </h3>
      <div class="l-ir2--box">
        <ul class="c-ul2">
          <li>
            <router-link
              class="c-hover1 c-hover1--target"
              to="about/ir/library/"
            >
              決算短信
            </router-link>
          </li>
          <li>
            <router-link
              class="c-hover1 c-hover1--target"
              to="about/ir/library/financial_reports"
            >
              有価証券報告書
            </router-link>
          </li>
          <li>
            <router-link
              class="c-hover1 c-hover1--target"
              to="about/ir/library/financial_results"
            >
              決算説明資料
            </router-link>
          </li>
          <li>
            <router-link
              class="c-hover1 c-hover1--target"
              to="about/ir/library/stockholders_meeting"
            >
              株主総会関連資料
            </router-link>
          </li>
          <li>
            <router-link
              class="c-hover1 c-hover1--target"
              to="about/ir/library/other_materials"
            >
              その他資料
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="l-list--ir flex flex-container flex-jus-between flex-align-item-center">
        <li>
          <router-link to="/about/ir/financial">
            株式情報
          </router-link>
        </li>
        <li>
          <router-link to="/about/ir/calendar">
            IRカレンダー
          </router-link>
        </li>
        <li>
          <router-link to="/about/ir/notice">
            電子公告
          </router-link>
        </li>
        <li>
          <router-link to="/about/ir/disclosure_policy">
            ディスクロージャー・ポリシー
          </router-link>
        </li>
        <li>
          <router-link to="/about/ir/disclaimer">
            免責事項
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Ir',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
  
</style>
