<template>
    <main id="info-products" class="page-second">
        <section class="l-info-products">
            <div class="l-content">
                <h2 class="c-title3 text-center"><span>事業・サービス概要</span><small class="mont">Our Business and Services</small></h2>
                <ul class="l-list-products">
                    <li v-for="(item, index) in list" :key="index">
                        <figure><img :src="item.img" :alt="item.title"></figure>
                        <div>
                            <dl>
                                <dt class="c-title6">{{item.title}}</dt>
                                <dd>{{item.info}}</dd>
                            </dl>
                            <div v-if="item.logo" class="flex c-img-link">
                                <a v-for="(imgLogo, index) in item.logo" :key="index" :href="imgLogo.link" target="_blank" rel="noopener noreferrer">
                                    <figure><img :src="imgLogo.src" :alt="item.title"></figure>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
var listProduct = [
    {
        img: '/dist/img/products/img1.jpg',
        title: '結婚関連事業',
        info: '「えらべる結婚式をお得な価格でつくる」を事業ミッションに掲げ、メディアを通じた情報提供から結婚式当日のサービス提供まで、花嫁花婿の結婚式づくりを一気通貫でサポートする体制を強化しています。主なサービスとして、結婚式場の情報や、それに関わる口コミや実際の費用明細などをお伝えするウェディング総合情報メディア「みんなのウェディング」、会費制結婚式のプロデュースサービス「会費婚」、インポートブランドを中心としたウェディングドレスを販売する「DRESS EVERY」などを運営しています。',
        logo:[
            {
                link: 'https://www.mwed.jp/',
                src: '/dist/img/products/logo1.svg'
            },
            {
                link: 'https://www.kaihikon.com/',
                src: '/dist/img/products/logo2.svg'
            },
            {
                link: 'http://dress-every.com/',
                src: '/dist/img/products/logo3.png'
            }
        ]

    },
     {
        img: '/dist/img/products/img2.jpg',
        title: '不動産関連事業',
        info: '住宅・不動産業界の情報格差をなくすことで、ユーザーが住まいの売買・賃貸を快適に行えるサービスの提供を目指し、住まい探しの情報提供を行うポータルサイト「オウチーノ」、不動産売買サービス「おうちのくふう」を運営しています。住宅・不動産会社向けには、住宅を探しているユーザーのニーズに合わせて提案可能な不動産営業支援ツール「くらすマッチ」も提供しています。また、Seven Signatures Internationalは富裕層のお客様向けのコンサルティングサービスも提供しています。',
        logo:[
            {
                link: 'https://o-uccino.com/front',
                src: '/dist/img/products/logo4.svg'
            },
            {
                link: 'https://kurasumatch.o-uccino.com/areagram/landing/new',
                src: '/dist/img/products/logo5.svg'
            },
            {
                link: 'https://www.sevensignatures.com/',
                src: '/dist/img/products/logo6.svg'
            },
            {
                link: 'https://ouchi-kufu.com/',
                src: '/dist/img/products/logo7.svg'
            }
        ]
    },
    {
        img: '/dist/img/products/img3.jpg',
        title: '金融関連事業',
        info: 'お金の面から一人ひとりの暮らしに寄り添い、行動の変化に繋げることを目指して、国内最大級の家計簿サービス「Zaim」を提供しています。また、ライフスタイルの変化に応じてニーズの高まる保険商品を開発する「くふう少額短期保険」、保険商品の検討支援を行う「保険のくふう」を運営しています',
        logo:[
            {
                link: 'https://zaim.net/',
                src: '/dist/img/products/logo8.svg'
            },
            {
                link: 'https://hoken-kufu.com/',
                src: '/dist/img/products/logo9.svg'
            },
            {
                link: 'https://www.2960owl.jp/',
                src: '/dist/img/products/logo10.svg'
            }
        ]
    },
    {
        img: '/dist/img/products/img4.jpg',
        title: 'デザイン・テクノロジー関連領域',
        info: 'Da Vinci Studioを中心に、グループ内外の制作・開発業務の支援、およびそれらを通じたノウハウ蓄積、研究開発に取り組んでいます。',
        logo:[
            {
                link: 'https://da-vinci-studio.com/',
                src: '/dist/img/products/logo11.png'
            }
        ]
    },
     {
        img: '/dist/img/products/img5.jpg',
        title: 'メディア関連領域',
        info: '膨大かつ複雑な情報に接する機会が増大する中で、ユーザーと事業者の情報格差をなくし、ユーザーのニーズを捉えた情報を分かりやすく伝える情報環境の構築を、くらしにくふう社を中心に展開しています。暮らしのトレンドマガジン「ヨムーノ」を運営しているほか、圧倒的なユーザーファーストメディアをくふうグループの各事業領域で構築・支援していきます。',
        logo:[
            {
                link: 'https://www.o-uccino.jp/article',
                src: '/dist/img/products/logo12.svg'
            }
        ]
    },
    {
        img: '/dist/img/products/img6.jpg',
        title: '投資・起業家支援領域',
        info: '当社グループが保有する投資資源を活用して、起業家支援、ベンチャー企業の経営支援、新規事業創出に取り組んでいます。'
    }
]
export default {
  name: 'products',
  data () {
    return {
        list: listProduct
    }
  }
}
</script>

<style lang="scss">

</style>
