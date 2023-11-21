<template>
  <section class="about-counter pt-120" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="block-title">
            <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Help People Now</p>
            <h3>Charity for the people <br>you care about.</h3>
          </div><!-- /.block-title -->
          <p class="about-counter__text">Lorem Ipsum is simply dummy text of the printing and <br> typesetting
            industry. Have you done google
            research which <br> works all the time. </p>
          <ul class="list-unstyled ul-list-one">
            <li>Nsectetur cing elit.</li>
            <li>Suspe ndisse suscipit sagittis leo.</li>
            <li>Entum estibulum dignissim posuere.</li>
          </ul><!-- /.list-unstyled list-style-one -->
          <div class="about-counter__count">
            <h3 class="odometer"><countTo :startVal='0' :endVal='startCounter ? 8860 : 0' :duration='3000'></countTo></h3>
            <p>Donation campaigns <br> are running</p>
          </div><!-- /.about-counter__count -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6 ">
          <div class="about-counter__image clearfix wow fadeInRight" data-wow-duration="1500ms">
            <div class="about-counter__image-content">
              <img src="/assets/images/shapes/about-count-heart-1-1.png" alt="">
              <p>We’re here to support you every step of the way.</p>
            </div><!-- /.about-counter__image-content -->
            <img src="/assets/images/resources/about-counter-1-1.jpg" alt="" class="float-left">
          </div><!-- /.about-counter__image -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.containerr -->
  </section>
</template>


<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

  export default {
    name: "AboutCounter",
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
