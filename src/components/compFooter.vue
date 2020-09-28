<template>
   <footer class="c-footer">
            <div class="l-container">
                <h2 class="text-center">
                    <img src="../assets/logo_ft.svg" alt="くふうカンパニー">
                </h2>
                <ul class="c-menu-ft">
                    <li>
                        <p>企業・グループ情報</p>
                        <div class="c-menu-ft--child">
                            <router-link to="/about/info">企業・グループ情報トップ</router-link>
                            <router-link to="/about/info/philosophy">企業理念</router-link>
                            <router-link to="/about/info/products">事業・サービス概要</router-link>
                            <router-link to="/about/info/boards">役員一覧</router-link>
                            <router-link to="/about/info/profile">会社概要</router-link>
                            <router-link to="/about/info/access">アクセス</router-link>
                            <router-link to="/about/info/history">沿革</router-link>
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
                        <p class="hidden_sp">プレスルーム</p>
                        <a href="./about/pressroom">プレスルーム</a>
                    </li>
                    <li>
                        <p class="hidden_sp">採用情報</p>
                        <a href="https://entrepreneur.kufu.co.jp/">採用情報</a>
                    </li>
                    <li>
                        <p class="hidden_sp">その他</p>
                        <router-link to="/privacypolicy">プライバシーポリシー</router-link>
                        <hr class="hidden_pc">
                        <router-link to="/security">情報セキュリティに関する方針</router-link>
                        <hr class="hidden_pc">
                        <router-link to="/contact">お問い合わせ</router-link>
                    </li>
                </ul>
                <div class="c-copy text-center">© Kufu Company Inc.</div>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'compFooter',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
$baseWidth:960px;
$bl: #282e33;
@mixin transform($a) {
    transform:$a;
    -webkit-transform:$a;
    -moz-transform: $a;
    -ms-transform:$a;
    -o-transform: $a;
}
@mixin transition($a) {
    transition:$a;
    -webkit-transition:$a;
    -moz-transition: $a;
    -ms-transition:$a;
    -o-transition: $a;
}
@mixin breakpoint($point) {
	@if $point == pc {
		@media only screen and (min-width: 959px) { @content ; }
	}
	@else if $point == sp {
		@media only screen and (max-width: 960px) { @content ; }
	}
}
.c-footer{
    background: #282e33;
    line-height: normal;
    font-size: 14px;
    color: #fafafa;
    h2{
        padding: 32px;
    }
    @include breakpoint(pc){
        h2{
            padding-top: 48px;
            padding-bottom: 64px;
            img{
                width: 200px;
            }
        }
    }
    @include breakpoint(sp){
        >div{
            padding-left: 0px;
            padding-right: 0px;
        }
    }
}
.c-menu-ft{
    >li{
        a{
            display: block;
        }
    }
    @include breakpoint(pc){
        display: flex; display: -webkit-flex; /* Safari */ display: -moz-flex; /* Firefox */ display: -ms-flex;
        >li{
            width: 25%;
            >p{
                font-weight: 700;
                margin-bottom: 1rem;
            }
            a{
                margin: 0 2rem .5rem -1rem;
                padding: .5rem 1rem;
                font-size: .875rem;
                transition: all .15s ease-in-out;
                &:hover {
                    background: hsla(0,0%,98%,.08);
                }
            }
        }
    }
    @include breakpoint(sp){
        border-top: 1px solid rgba(241,241,243,.16);
        >li{
            padding: 24px;
            cursor: pointer;
            border-bottom: 1px solid rgba(241,241,243,.16);
            >a:after {
                content: "";
                display: inline-block;
                position: absolute;
                top: 50%;
                right: 0;
                width: 1rem;
                height: 1rem;
                -webkit-transform: translateY(-50%) rotate(-90deg);
                transform: translateY(-50%) rotate(-90deg);
                background-image: url(../assets/down-white-icon.svg);
                background-repeat: no-repeat;
                background-position: 100%;
            }
            p{
                background-image: url(../assets/down-white-icon.svg);
                background-repeat: no-repeat;
                background-position: 100%;
            }
            a {
                margin: 0;
                position: relative;
            }
            >div{
                height: 0;
                padding: 0;
                overflow: hidden;
                opacity: 0;
                transition: .25s;
                &.is-active{
                    height: auto;
                    margin: 1rem 0 0;
                    padding: 5px;
                    opacity: 1;
                }
                >a {
                    padding: 19px 32px;
                }
            }
            hr {
                height: 1px;
                margin: 1.5rem -24px;
                border: 0;
                background: rgba(241,241,243,.16);
            }
        }
    }
}
.c-copy{
    padding: 48px 24px;
}
</style>
