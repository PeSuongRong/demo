<template>
  <section class="l-top3 text-center">
    <div class="l-container">
      <h2 class="c-title1">
        くふうグループが持つ<span>機能</span>で、<br><i
          class="c-light"
          data-animate-in="scale"
          data-animate-in-delay="100"
        />の実現を応援します。
      </h2>
      <figure>
        <img
          class="hidden_sp"
          width="807"
          src="../assets/img-top3-pc.svg"
          alt="くふうグループが持つ機能で、の実現を応援します。"
        >
        <img
          class="hidden_pc"
          src="../assets/img-top3-sp.svg"
          alt="くふうグループが持つ機能で、の実現を応援します。"
        >
      </figure>
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SecHome4',
  data () {
    return {
     text:"ひとつ、またひとつ、増やしていきます。"
    }
  }
}
</script>
