<template>
   <main id="security" class="page-second">
        <section class="l-security">
            <div class="l-content">
                <h2 class="c-title3 text-center"><span>情報セキュリティに関する方針</span><small class="mont">Information Security Policy</small></h2>
                <div class="l-security__info pdt15">
                    <p class="u-p">株式会社くふうカンパニーについて、お客様はもとより、当社の事業やサービスに関わる全ての人々の満足を得る事を目標とし、信頼・安心される会社を目指す。</p>
                    <div class="p-item-pri">
                        <h3 class="pdt15">行動指針</h3>
                        <ol>
                            <li><p>情報資産の機密性、完全性、可用性を確実に保護するために組織的、技術的に適切な対策を講じ、変化する情報技術や新たな脅威に対応する。</p></li>
                            <li><p>全社員に情報セキュリティ教育の実施と方針の周知徹底をはかり、意識の高揚・維持に務める。</p></li>
                            <li><p>マネジメントシステム及び、情報セキュリティに関する目的を設定し、定期的にレビューし、継続的に改善を実施し、維持する。</p></li>
                            <li><p>マネジメントシステムを実行・維持・改善して行くために管理責任者に責任と権限を委譲する。</p></li>
                        </ol>
                    </div>
                </div>
                <p class="u-p text-right"><time>2019年11月19日</time><br>株式会社くふうカンパニー<br>代表取締役　堀口 育代<br>代表取締役　新野 将司</p>
                <div class="l-security__box flex flex">
                    <figure>
                        <img src="../assets/security/img1.jpg" alt="ISMS認証">
                    </figure>
                    <div>
                        <dl class="flex flex-container">
                            <dt>取得認証規格</dt>
                            <dd>ISO/IEC 27001:2013　情報セキュリティマネジメントシステム</dd>
                            <dt>認証日</dt>
                            <dd>2020年03月11日</dd>
                            <dt>認証範囲</dt>
                            <dd>1. グループ会社における事業活動の推進および支援にかかる業務（人事・労務・経理・財務業務等）<br>2. 起業家、若手経営者、ベンチャー企業の支援に係る業務（投資支援）</dd>
                            <dt>審査機関</dt>
                            <dd>株式会社GCERTI-JAPAN</dd>
                            <dt>認証番号</dt>
                            <dd>GIJP-0086-IC</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: 'security',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
$baseWidth:960px;
$bl: #282e33;
$mainFonts : "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
@mixin breakpoint($point) {
	@if $point == pc {
		@media only screen and (min-width: 959px) { @content ; }
	}
	@else if $point == sp {
		@media only screen and (max-width: 960px) { @content ; }
	}
}
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
.l-security__info{
    .p-item-pri{
        ol{
            padding: 3rem 0 1rem 1rem;
            margin-bottom: 1rem;
            list-style-type: decimal;
            >li{
                margin-bottom: 16px;
            }
        }
    }
}
.l-security__box{
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-direction: row;
    >div{
        margin-left: 32px;
    }
    dl{
        flex-direction: row;
        margin-bottom: 1rem;
        >dt{
            width: 20%;
            margin: 0 0 8px;
            font-weight: 700;
            font-size: 14px;
        }
        >dd{
            width: 75%;
            margin: 0 0 8px 2%;
            font-size: 14px;
        }
    }
    @include breakpoint(pc){
        >figure{
            width: 240px;
        }
        >div{
            width: 496px;
        }
    }
    @include breakpoint(sp){
        flex-direction: column;
        >figure{
            width: 100%;
            text-align: center;
            margin-bottom: 24px;
        }
        >div{
            margin-left: 0px;
        }
    }
}
</style>
