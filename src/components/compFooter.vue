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
            <router-link to="/about/info">
              企業・グループ情報トップ
            </router-link>
            <router-link to="/about/info/philosophy">
              企業理念
            </router-link>
            <router-link to="/about/info/products">
              事業・サービス概要
            </router-link>
            <router-link to="/about/info/boards">
              役員一覧
            </router-link>
            <router-link to="/about/info/profile">
              会社概要
            </router-link>
            <router-link to="/about/info/access">
              アクセス
            </router-link>
            <router-link to="/about/info/history">
              沿革
            </router-link>
          </div>
        </li>
        <li>
          <p>株主・投資家情報</p>
          <div class="c-menu-ft--child">
            <router-link to="./about/ir">
              株主・投資家情報トップ
            </router-link>
            <router-link to="./about/ir/news">
              IRニュース
            </router-link>
            <router-link to="./about/ir/library">
              IRライブラリ
            </router-link>
            <router-link to="./about/ir/financial">
              株式情報
            </router-link>
            <router-link to="./about/ir/calendar">
              IRカレンダー
            </router-link>
            <router-link to="./about/ir/notice">
              電子公告
            </router-link>
            <router-link to="./about/ir/disclosure_policy">
              ディスクロージャー・ポリシー
            </router-link>
            <router-link to="./about/ir/disclaimer">
              免責事項
            </router-link>
          </div>
        </li>
        <li>
          <p class="hidden_sp">
            プレスルーム
          </p>
          <router-link to="./about/pressroom">
            プレスルーム
          </router-link>
        </li>
        <li>
          <p class="hidden_sp">
            採用情報
          </p>
          <a href="https://entrepreneur.kufu.co.jp/">
            採用情報
          </a>
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
