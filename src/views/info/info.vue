<template>
  <main id="info" class="page-second">
        <section class="l-info1">
            <h2 class="c-title3 text-center"><span>企業・グループ情報</span><small class="mont">Corporate and Group Information</small></h2>
            <figure class="c-mv"><img src="../../assets/about/info/mv.jpg" alt="企業・グループ情報"></figure>
        </section>
        <section class="l-info2">
            <ul class="flex flex-align-item-center flex-jus-center flex-container">
                <li><router-link to="/about/info/philosophy">企業理念</router-link></li>
                <li><router-link to="/about/info/products">事業・サービス概要</router-link></li>
                <li><router-link to="/about/info/boards">役員一覧</router-link></li>
                <li><router-link to="/about/info/profile">会社概要</router-link></li>
                <li><router-link to="/about/info/access">アクセス</router-link></li>
                <li><router-link to="/about/info/history">沿革</router-link></li>
            </ul>
        </section>
    </main>
</template>

<script>
export default {
  name: 'compInfo',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">

</style>
