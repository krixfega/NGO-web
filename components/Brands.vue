<template>
  <div class="client-carousel pt-120 pb-120 client-carousel__has-top-shadow">
    <div class="container">
      <div class="thm-swiper__slider swiper-container">
        <div class="swiper-wrapper">
          <swiper :options="swiperOptions">

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>

              <div class="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="">
              </div><!-- /.swiper-slide -->
            </swiper-slide>

          </swiper>

        </div><!-- /.swiper-wrapper -->
      </div><!-- /.thm-swiper__slider -->
    </div><!-- /.container -->
  </div>
</template>


<script>
  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "Brands",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 5,
          loop: true,
          speed: 1000,
          spaceBetween: 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024: {
              slidesPerView: 5
            },
            768: {
              slidesPerView: 3
            },
            640: {
              slidesPerView: 2
            },
            320: {
              slidesPerView: 2
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
