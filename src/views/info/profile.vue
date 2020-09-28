<template>
  <main id="info-profile" class="page-second">
        <section class="l-info-profile">
            <h2 class="c-title3 text-center"><span>会社概要</span><small class="mont">Corporate Profile</small></h2>
            <div class="l-ir--financial__infor u-pd--bt">
                <dl>
                    <dt>会社名</dt>
                    <dd>株式会社くふうカンパニー<br><small>(英文社名 : Kufu Company Inc.)</small></dd>
                </dl>
                <dl>
                    <dt>本社所在地</dt>
                    <dd>
                        <p>〒108-0073</p>
                        <p>東京都港区三田1-4-28</p>
                        <p>三田国際ビル 23階</p>
                        <router-link class="u-link__blue c-hover1--target" to="/about/info/access">アクセス</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>設立年月</dt>
                    <dd>2018年10月</dd>
                </dl>
                <dl>
                    <dt>資本金</dt>
                    <dd>50百万円（2019年9月末時点）</dd>
                </dl>
                <dl>
                    <dt>代表者</dt>
                    <dd>
                        <p>代表取締役堀口 育代<br>代表取締役 新野 将司</p>
                        <router-link class="u-link__blue c-hover1--target" to="/about/info/boards">役員一覧</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>事業内容</dt>
                    <dd>
                        <p>グループ全体の経営戦略策定、経営管理およびそれに付帯する業務</p>
                        <p>グループ会社における事業活動の推進および支援に係る業務</p>
                        <p>起業家、若手経営者、ベンチャー企業の支援に係る業務</p>
                    </dd>
                </dl>
            </div>
        </section>
        <section class="l-list-link">
            <h3>主なグループ事業会社一覧</h3>
            <ul>
                <li v-for="(item, index) in listLink" :key="index"><a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.nameLink}}</a></li>
            </ul>
        </section>
    </main>
</template>

<script>
var listLink = [
    {
        link:'https://www.mwed.co.jp/',
        nameLink: '株式会社みんなのウェディング'
    },
    {
        link:'https://rcubeinc.com/',
        nameLink: '株式会社アールキューブ'
    },
    {
        link:'https://www.full-throttles.com/',
        nameLink: '株式会社フルスロットルズ'
    },
    {
        link:'https://corporate.o-uccino.jp/',
        nameLink: '株式会社オウチーノ'
    },
    {
        link:'https://www.sevensignatures.com/company',
        nameLink: '株式会社Seven Signatures International'
    },
    {
        link:'https://zaim.co.jp/',
        nameLink: '株式会社Zaim'
    },
    {
        link:'https://hoken-kufu.com/',
        nameLink: '株式会社保険のくふう'
    },
    {
        link:'https://da-vinci-studio.com/',
        nameLink: '株式会社 Da Vinci Studio'
    },
    {
        link:'https://kurashi-kufu.com/',
        nameLink: '株式会社 Da Vinci Studio'
    },
    {
        link:'https://www.2960owl.jp/company/index.html',
        nameLink: 'くふう少額短期保険株式会社'
    },
    {
        link:'https://ouchi-kufu.com/',
        nameLink: '株式会社おうちのくふう'
    }
]
export default {
  name: 'profile',
  data () {
    return {
     listLink:listLink
    }
  }
}
</script>

<style lang="scss">

</style>
