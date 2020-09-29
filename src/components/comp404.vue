<template>
  <div>
    <main class="l-404 page-second">
      <h2 class="text-center">
        404
      </h2>
      <h3 class="text-center">
        Not Found
      </h3>
      <p>ページがありません</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
    @mixin breakpoint($point) {
        @if $point == pc {
            @media only screen and (min-width: 959px) { @content ; }
        }
        @else if $point == sp {
            @media only screen and (max-width: 960px) { @content ; }
        }
    }
    .l-404{
        h2{
            padding-top: 1.5rem;
            font-size: 2rem;
            margin-bottom: 0.5rem;
            letter-spacing: 1.6px;
            @include breakpoint(pc){
                padding-top: 2rem;
                font-size: 3rem;
                margin-bottom: 1rem;
            }
        }
        h3{
            line-height: 1;
            color: rgba(40,46,51,.5);
            font-family: Montserrat;
            font-size: .75rem;
            margin-bottom: 1.5rem;
            @include breakpoint(pc){
                font-size: .875rem;
                margin-bottom: 2rem;
            }
        }
        p{
            padding: 3.5rem 1.5rem;
            font-size: 1.25rem;
        }
    }
</style>
