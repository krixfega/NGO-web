<template>
  <section class="fact-counter" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 text-center">
          <h3 class="odometer"><countTo :startVal='0' :endVal='startCounter ? 8860 : 0' :duration='3000'></countTo></h3>
          <p>Fund Raised</p>
          <a href="#">+</a>
        </div><!-- /.col-md-6 col-lg-3 -->
        <div class="col-md-6 col-lg-3 text-center">
          <h3 class="odometer"><countTo :startVal='0' :endVal='startCounter ? 456 : 0' :duration='3000'></countTo></h3>
          <p>Fund Raised</p>
          <a href="#">+</a>
        </div><!-- /.col-md-6 col-lg-3 -->
        <div class="col-md-6 col-lg-3 text-center">
          <h3 class="odometer"><countTo :startVal='0' :endVal='startCounter ? 6208 : 0' :duration='3000'></countTo></h3>
          <p>Fund Raised</p>
          <a href="#">+</a>
        </div><!-- /.col-md-6 col-lg-3 -->
        <div class="col-md-6 col-lg-3 text-center">
          <h3 class="odometer"><countTo :startVal='0' :endVal='startCounter ? 960 : 0' :duration='3000'></countTo></h3>
          <p>Fund Raised</p>
          <a href="#">+</a>
        </div><!-- /.col-md-6 col-lg-3 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>


<script>
import countTo from 'vue-count-to';
import { ObserveVisibility } from 'vue-observe-visibility'

export default {
  name: "Funfact",
  components: { countTo },
  directives: {
    ObserveVisibility
  },
  data() {
    return{
      startCounter: false
    }
  },
  methods: {
    onVisibilityChange (isVisible) {
      if (isVisible){
        this.startCounter = true;
      }

    },
  },
}
</script>
<style scoped>

</style>
