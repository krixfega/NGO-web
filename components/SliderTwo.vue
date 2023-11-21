<template>
  <section class="main-slider main-slider__two">
    <div class="swiper-container thm-swiper__slider">

      <swiper :options="swiperOptions">

        <swiper-slide>
        <div class="swiper-slide">
          <div class="image-layer" style="background-image: url(/assets/images/main-slider/slider-2-1.jpg);"></div>
          <!-- /.image-layer -->
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-xl-6 col-lg-12 text-left">
                <h2>Donat<span>i</span>on <br> Can Change <br> Someone’s Life</h2>
                <p>Make a difference in families lives with just $5 a Month</p>
                <a href="#" data-target=".donate-options" class="scroll-to-target thm-btn dynamic-radius">Start Donating</a>
                <!-- /.thm-btn dynamic-radius -->
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
          </div><!-- /.container -->
        </div><!-- /.swiper-slide -->
        </swiper-slide>
        <swiper-slide>
        <div class="swiper-slide">
          <div class="image-layer" style="background-image: url(/assets/images/main-slider/slider-1-2.jpg);"></div>
          <!-- /.image-layer -->
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-xl-6 col-lg-12 text-left">
                <h2>Donat<span>i</span>on <br> Can Change <br> Someone’s Life</h2>
                <p>Make a difference in families lives with just $5 a Month</p>
                <a href="#" data-target=".donate-options" class="scroll-to-target thm-btn dynamic-radius">Start Donating</a>
                <!-- /.thm-btn dynamic-radius -->
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
          </div><!-- /.container -->
        </div><!-- /.swiper-slide -->
        </swiper-slide>
        <swiper-slide>
        <div class="swiper-slide">
          <div class="image-layer" style="background-image: url(/assets/images/main-slider/slider-2-1.jpg);"></div>
          <!-- /.image-layer -->
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-xl-6 col-lg-12 text-left">
                <h2>Donat<span>i</span>on <br> Can Change <br> Someone’s Life</h2>
                <p>Make a difference in families lives with just $5 a Month</p>
                <a href="#" data-target=".donate-options" class="scroll-to-target thm-btn dynamic-radius">Start Donating</a>
                <!-- /.thm-btn dynamic-radius -->
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
          </div><!-- /.container -->
        </div><!-- /.swiper-slide -->
        </swiper-slide>
      </swiper>
    </div><!-- /.swiper-container thm-swiper__slider -->
  </section>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "SliderTwo",
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
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        effect: "fade",
        pagination: {
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    }
  },
}
</script>
<style scoped>

</style>
