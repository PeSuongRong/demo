<template>
  <footer class="c-footer">
    <div class="l-container">
      <h2 class="text-center">
        <img
          src="../assets/logo_ft.svg"
          alt="くふうカンパニー"
        >
      </h2>
      <ul class="c-menu-ft">
        <li>
          <p>企業・グループ情報</p>
          <div class="c-menu-ft--child">
            <a href="/about/info">企業・グループ情報トップ</a>
            <a href="/about/info/philosophy">企業理念</a>
            <a href="/about/info/products">事業・サービス概要</a>
            <a href="/about/info/boards">役員一覧</a>
            <a href="/about/info/profile">会社概要</a>
            <a href="/about/info/access">アクセス</a>
            <a href="/about/info/history">沿革</a>
          </div>
        </li>
        <li>
          <p>株主・投資家情報</p>
          <div class="c-menu-ft--child">
            <a href="./about/ir">株主・投資家情報トップ</a>
            <a href="./about/ir/news">IRニュース</a>
            <a href="./about/ir/library">IRライブラリ</a>
            <a href="./about/ir/financial">株式情報</a>
            <a href="./about/ir/calendar">IRカレンダー</a>
            <a href="./about/ir/notice">電子公告</a>
            <a href="./about/ir/disclosure_policy">ディスクロージャー・ポリシー</a>
            <a href="./about/ir/disclaimer">免責事項</a>
          </div>
        </li>
        <li>
          <p class="hidden_sp">
            プレスルーム
          </p>
          <a href="./about/pressroom">プレスルーム</a>
        </li>
        <li>
          <p class="hidden_sp">
            採用情報
          </p>
          <a href="https://entrepreneur.kufu.co.jp/">採用情報</a>
        </li>
        <li>
          <p class="hidden_sp">
            その他
          </p>
          <router-link to="/privacypolicy">
            プライバシーポリシー
          </router-link>
          <hr class="hidden_pc">
          <router-link to="/security">
            情報セキュリティに関する方針
          </router-link>
          <hr class="hidden_pc">
          <router-link to="/contact">
            お問い合わせ
          </router-link>
        </li>
      </ul>
      <div class="c-copy text-center">
        © Kufu Company Inc.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CompFooter',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">@import '../scss/footer.scss';</style>
