<template>
  <header class="c-header">
    <div class="l-container">
      <div class="flex flex-jus-between l-header--top">
        <figure>
          <router-link to="/">
            <img
              src="../assets/logo.svg"
              alt="くふうカンパニー"
            >
          </router-link>
        </figure>
        <div class="c-menu">
          <div class="c-menu--list is-hide">
            <span class="hidden_pc c-menu--close"><span /><span /></span>
            <ul>
              <li>
                <p><span>企業・グループ情報</span></p>
                <ul>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info"
                    >
                      企業・グループ情報トップ
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/philosophy"
                    >
                      企業理念
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/products"
                    >
                      事業・サービス概要
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/boards"
                    >
                      役員一覧
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/profile"
                    >
                      会社概要
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/access"
                    >
                      アクセス
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="link"
                      to="/about/info/history"
                    >
                      沿革
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <p><span>株主・投資家情報</span></p>
                <ul>
                  <li>
                    <a
                      class="link"
                      href="./about/ir"
                    >株主・投資家情報トップ</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/news"
                    >IRニュース</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/library"
                    >IRライブラリ</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/financial"
                    >株式情報</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/calendar"
                    >IRカレンダー</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/notice"
                    >電子公告</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/disclosure_policy"
                    >ディスクロージャー・ポリシー</a>
                  </li>
                  <li>
                    <a
                      class="link"
                      href="./about/ir/disclaimer"
                    >免責事項</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="link"
                  href="./about/pressroom"
                ><span>プレスルーム</span></a>
              </li>
              <li>
                <a
                  href="https://entrepreneur.kufu.co.jp/"
                  class="link"
                ><span>採用情報</span></a>
              </li>
            </ul>
          </div>
          <span class="hidden_pc c-menu--open"><span /></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
    name: 'CompHeader',
    data () {
        return {
        }
    }
    }
</script>

<style lang="scss">
    @import '../scss/header.scss';
</style>
