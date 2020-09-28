<template>
   <main id="info-boards" class="page-second">
        <section class="l-info-boards">
            <div class="l-content">
                <h2 class="c-title3 text-center"><span>役員一覧</span><small class="mont">Boards</small></h2>
                <div class="pdt15 l-info-boards__text">
                    <ul class="text-center">
                        <li v-for="(item, index) in listBoard" :key="index">
                            <dl>
                                <dt>{{item.tt}}</dt>
                                <dd>{{item.info}}</dd>
                            </dl>
                        </li>
                    </ul>
                    <p class="text-right"><time datetime="2019-12-17">{{date}}</time></p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
var listBoards = [
    {
        tt:'代表取締役',
        info: '堀口 育代'
    },
     {
        tt:'代表取締役',
        info: '新野 将司'
    },
     {
        tt:'取締役',
        info: '熊谷 祐紀'
    },
     {
        tt:'取締役',
        info: '菅間 淳'
    },
     {
        tt:'取締役',
        info: '吉川 崇倫'
    },
     {
        tt:'取締役会長',
        info: '穐田 誉輝'
    },
     {
        tt:'取締役',
        info: '石渡 進介'
    },
     {
        tt:'社外取締役',
        info: '西村 淸彦（監査等委員）'
    },
     {
        tt:'社外取締役',
        info: '田丸 正敏（監査等委員）'
    },
     {
        tt:'社外取締役',
        info: '飯田 耕一郎（監査等委員）'
    }
]
export default {
  name: 'boards',
  data () {
    return {
    date:"2019年12月17日時点",
     listBoard: listBoards
    }
  }
}
</script>
