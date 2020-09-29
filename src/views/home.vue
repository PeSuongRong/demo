<template>
  <div>
    <main id="c-top">
      <secHome1 />
      <secHome2 />
      <secHome3 />
      <secHome4 />
      <secHome5 :list="listNew" />
    </main>
  </div>
</template>

<script>
var listNew = [
    {
        date:"2020/8/28",
        isPDF: true,
        text: "特別損失の計上に関するお知らせ",
        link:"www.google.com"
    },
    {
        date:"2020/8/28",
        isPDF: false,
        text: "「人生観が変わりました！」人気急上昇中・3時のヒロイン 福田 麻貴さんがウェディングドレス試着に人生初挑戦！！",
        link:"www.facebook.com"
    },
    {
        date:"2020/8/28",
        isPDF: false,
        text: "コロナ禍で子育ての悩みや困りごとが増加した家庭が70%、3歳からのはぐくみメディア『おやこのくふう』をリリース",
        link:"www.zing.com"
    },
    {
        date:"2020/8/28",
        isPDF: true,
        text: "投資事業有限責任組合の設立に関するお知らせ",
        link:"www.kenh14.vn"
    },
    {
        date:"2020/8/28",
        isPDF: true,
        text: "業績予想に関するお知らせ",
        link:"www.baomoi.vn"
    }
]
import $ from 'jquery'
import secHome1 from '../components/secHome1'
import secHome2 from '../components/secHome2'
import secHome3 from '../components/secHome3'
import secHome4 from '../components/secHome4'
import secHome5 from '../components/secHome5'

export default {
  name: 'CompHome',
  components:{
    secHome1,
    secHome2,
    secHome3,
    secHome4,
    secHome5
  },
  data () {
    return {
     listNew: listNew
    }
  },
  mounted(){
    $(function() {
    var html = $('html');
    // Detections
    if (!("ontouchstart" in window)) {
      html.addClass("noTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if (navigator.appVersion.indexOf("Trident") === -1) {
        html.addClass("isEDGE");
      } else {
        html.addClass("isIE isIE11");
      }
    }
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      html.addClass("isIE");
    }
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      html.addClass("isSafari");
    }
  
    // On Screen
  
    $.fn.isOnScreen = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    function detection() {
      for (var i = 0; i < items.length; i++) {
        var el = $(items[i]);
  
        if (el.isOnScreen()) {
          el.addClass("in-view");
        } 
        // else {
        //   el.removeClass("in-view");
        // }
      }
    }
  
    var items = document.querySelectorAll(
      "*[data-animate-in], *[data-detect-viewport]"
    ),
      waiting = false,
      w = $(window);
  
    w.on("resize scroll", function() {
      if (waiting) {
        return;
      }
      waiting = true;
      detection();
  
      setTimeout(function() {
        waiting = false;
      }, 100);
    });
  
    $(document).ready(function() {
      setTimeout(function() {
        detection();
      }, 500);
  
      for (var i = 0; i < items.length; i++) {
        var d = 0,
          el = $(items[i]);
        if (items[i].getAttribute("data-animate-in-delay")) {
          d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
        } else {
          d = 0;
        }
        el.css("transition-delay", d);
      }
    });
  });
  
  }
}
</script>

<style lang="scss">
@import '../scss/home.scss';
</style>
