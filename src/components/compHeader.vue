<template>
  <header class="c-header">
           <div class="l-container">
                <div class="flex flex-jus-between l-header--top">
                    <figure><router-link to="/"><img src="../assets/logo.svg" alt="くふうカンパニー"></router-link></figure>
                    <div class="c-menu">
                        <div class="c-menu--list is-hide">
                            <span class="hidden_pc c-menu--close"><span></span><span></span></span>
                            <ul>
                                <li>
                                    <p><span>企業・グループ情報</span></p>
                                    <ul>
                                        <li><router-link class="link" to="/about/info">企業・グループ情報トップ</router-link></li>
                                        <li><router-link class="link" to="/about/info/philosophy">企業理念</router-link></li>
                                        <li><router-link class="link" to="/about/info/products">事業・サービス概要</router-link></li>
                                        <li><router-link class="link" to="/about/info/boards">役員一覧</router-link></li>
                                        <li><router-link class="link" to="/about/info/profile">会社概要</router-link></li>
                                        <li><router-link class="link" to="/about/info/access">アクセス</router-link></li>
                                        <li><router-link class="link" to="/about/info/history">沿革</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <p><span>株主・投資家情報</span></p>
                                    <ul>
                                        <li><a class="link" href="./about/ir">株主・投資家情報トップ</a></li>
                                        <li><a class="link" href="./about/ir/news">IRニュース</a></li>
                                        <li><a class="link" href="./about/ir/library">IRライブラリ</a></li>
                                        <li><a class="link" href="./about/ir/financial">株式情報</a></li>
                                        <li><a class="link" href="./about/ir/calendar">IRカレンダー</a></li>
                                        <li><a class="link" href="./about/ir/notice">電子公告</a></li>
                                        <li><a class="link" href="./about/ir/disclosure_policy">ディスクロージャー・ポリシー</a></li>
                                        <li><a class="link" href="./about/ir/disclaimer">免責事項</a></li>
                                    </ul>
                                </li>
                                <li><a class="link" href="./about/pressroom"><span>プレスルーム</span></a></li>
                                <li><a href="https://entrepreneur.kufu.co.jp/" class="link"><span>採用情報</span></a></li>
                            </ul>
                        </div>
                        <span class="hidden_pc c-menu--open"><span></span></span>
                    </div>
                </div>
           </div>
        </header>
</template>

<script>
export default {
  name: 'compHeader',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
$baseWidth:960px;
$bl: #282e33;
@mixin breakpoint($point) {
	@if $point == pc {
		@media only screen and (min-width: 959px) { @content ; }
	}
	@else if $point == sp {
		@media only screen and (max-width: 960px) { @content ; }
	}
}
.c-header{
    position: fixed;
    top: 0;
    z-index: 1100;
    width: 100%;
    background: #fafafa;
}
.l-header--top{
    padding-top: 1rem;
    padding-bottom: 1rem;
    align-items: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    >figure{
        width: 200px;
    }
}
.c-menu{
    &--list{
        >ul{
            >li{
                >ul{
                    display: none;
                }
            }
        }
    }
}
.c-menu--close{
    position: fixed;
    top: 14px;
    right: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    >span{
        right: 10px;
        height: 32px;
        width: 3px;
        background: $bl;
        position: absolute;
        &:first-child{
            transform: rotate(45deg);
        }
        &:last-child{
            transform: rotate(-45deg);
        }
    }
}
@include breakpoint(pc){
    .c-header{
        >div{
            height: 80px;
        }
    }
    .c-menu{
        &--list{
            >ul{
                display: flex; display: -webkit-flex; /* Safari */ display: -moz-flex; /* Firefox */ display: -ms-flex;
                >li{
                    display: inline-block;
                    font-size: .875rem;
                    font-weight: 700;
                    position: relative;
                    >ul{
                        position: absolute;
                        width: 200px;
                        top: 32px;
                        left: 0;
                        margin-top: 1rem;
                        padding: 0;
                        background-color: #fafafa;
                        box-shadow: 0 2px 4px rgba(40,46,51,.54);
                        li {
                            display: block;
                            padding: 0;
                            background-color: #fafafa;
                            >a{
                                display: block;
                                padding: 1rem;
                                &:hover{
                                    background-color: #f1f1f3;
                                }
                            }
                        }
                        &:before {
                            content: "";
                            position: absolute;
                            top: -16px;
                            left: 32px;
                            margin-left: -8px;
                            border: 8px solid transparent;
                            border-bottom-color: #fafafa;
                        }
                    }
                    &:hover{
                        background-color: #f1f1f3;
                        cursor: pointer;
                        >ul{
                            display: block;
                        }
                    }
                    >p, >a{
                        padding: 1rem;
                        display: inline-block;
                    }
                    >a span{
                        margin-left: 8px;
                        margin-right: 8px;
                    }
                    >p span{
                        &::after{
                            content: '';
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            margin: 0 0 0 .5rem;
                            background: url(../assets/tagert.svg) no-repeat;
                            background-size: contain;
                            background-position: 50%;
                            opacity: .54;
                        }
                    }
                }
            }
        }
    }
}
@include breakpoint(sp){
    .l-header--top{
        >figure{
            img{
                height: 32px;
            }
        }
    }
    .c-menu--open{
        position: relative;
        z-index: 1000;
        width: 32px;
        height: 22px;
        display: inline-block;
        margin-top: 3px;
        border-top:2px solid $bl;
        border-bottom:2px solid $bl;
        >span{
            height: 2px;
            background: $bl;
            width: 100%;
            position: absolute;
            top:8px;
            left: 0;
        }
    }
    .c-menu{
        &--list{
            position: fixed;
            right: 0px;
            z-index: 1100;
            top:0;
            background: #fafafa;
            width: 100%;
            height: 100%;
            font-size: 1.15em;
            overflow-y: auto;
            overflow-x: hidden;
            transition: all 0.5s ease 0s;
            padding-top: 2.5em;
            &.is-hide{
                transform: translate3d(100%, 0px, 0px);
            }
            >ul{
                font-size: 1.25rem;
                text-align: center;
                margin: 2rem 0;
                >li{
                    padding: 1.5rem;
                    cursor: pointer;
                    a,>p{
                        width: 100%;
                        display: block;
                    }
                    a{
                        padding: 1rem 0;
                    }
                    >p{
                        span{
                            &::after{
                                position: relative;
                                margin-left: 8px;
                                content: url(../assets/down-icon.svg);
                            }
                            &.is-show::after{
                                content: url(../assets/up-icon.svg);
                            }
                        }
                    }
                    >ul{
                        background: #f1f1f3;
                        display: block;
                        opacity: 0;
                        transition: .25s;
                        height: 0;
                        overflow: hidden;
                        margin:1rem -1.5rem 0px;
                        padding-top: 5px;
                        &.is-active{
                            height: auto;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>
