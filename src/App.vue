<template>
  <div id="app">
    <compHeader />
    <router-view />
    <compFooter />
  </div>
</template>

<script>
import compHeader from './components/compHeader.vue'
import compFooter from './components/compFooter.vue'
import $ from 'jquery'
export default {
  name: 'App',
  components: {
    compHeader,
    compFooter
  },
   mounted(){
    $(document).ready(function(){
    $(".c-menu--list >ul>li").click(function(){
        $(this).find('ul').toggleClass('is-active');
        $(this).find('p span').toggleClass('is-show');
    });
    $(".c-menu-ft>li").click(function(){
        $(this).find('.c-menu-ft--child').toggleClass('is-active');
    });
    $(".c-menu--close").click(function(){
        $(".c-menu--list").addClass('is-hide');
        $(this).hide();
    });
    $(".c-menu--open").click(function(){
        $(".c-menu--list").removeClass('is-hide');
        $(".c-menu--close").show();
    });
    $('.jss1').on('click', function() {
        $('.jss1').removeClass('is-act');
        $(this).addClass('is-act');
    });
    $('html').click(function(event) {
        if ($(event.target).closest('.jss1').length === 0) {
            $('.jss1').removeClass('is-act');
        }
    });
  });}
}
</script>

<style lang="scss">
  @import 'scss/all.scss';
</style>
