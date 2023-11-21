<template>
  <section class="service-two">
    <div class="container">
      <div class="swiper-container thm-swiper__slider">
          <swiper :options="swiperOptions">
            <swiper-slide>
                <div class="service-two__box background-primary wow fadeInUp" data-wow-duration="1500ms"
                     style="background-image: url(/assets/images/resources/service-1-1.jpg);">
                  <div class="service-two__box-inner">
                    <img src="/assets/images/shapes/heart-2-2.png" width="15" alt="">
                    <p>Start Donating</p>
                    <h3>
                      <nuxt-link to="/contact">More charity <br> better lives</nuxt-link>
                    </h3>
                    <nuxt-link to="/contact" class="service-two__box-link"><i class="far fa-angle-right"></i>
                    </nuxt-link>
                    <!-- /.service-two__link -->
                  </div><!-- /.service-two__box-inner -->
                </div><!-- /.service-two__box -->
            </swiper-slide>
            <swiper-slide>
                <div class="service-two__box background-secondary wow fadeInDown" data-wow-duration="1500ms"
                     data-wow-delay="100ms" style="background-image: url(/assets/images/resources/service-1-2.jpg);">
                  <div class="service-two__box-inner">
                    <img src="/assets/images/shapes/heart-2-2.png" width="15" alt="">
                    <p>Let’s Join</p>
                    <h3>
                      <nuxt-link to="/become-volunteer">Join our <br> volunteers</nuxt-link>
                    </h3>
                    <nuxt-link to="/become-volunteer" class="service-two__box-link"><i class="far fa-angle-right"></i>
                    </nuxt-link>
                    <!-- /.service-two__link -->
                  </div><!-- /.service-two__box-inner -->
                </div><!-- /.service-two__box -->
            </swiper-slide>
            <swiper-slide>
                <div class="service-two__box background-base wow fadeInUp" data-wow-duration="1500ms"
                     data-wow-delay="200ms" style="background-image: url(/assets/images/resources/service-1-3.jpg);">
                  <div class="service-two__box-inner">
                    <img src="/assets/images/shapes/heart-2-2.png" width="15" alt="">
                    <p>Quick Funding</p>
                    <h3>
                      <nuxt-link to="/contact">Poor childs <br> education</nuxt-link>
                    </h3>
                    <nuxt-link to="/contact" class="service-two__box-link"><i class="far fa-angle-right"></i>
                    </nuxt-link>
                    <!-- /.service-two__link -->
                  </div><!-- /.service-two__box-inner -->
                </div><!-- /.service-two__box -->
            </swiper-slide>
          </swiper>
      </div><!-- /.causes-col__3 -->
    </div><!-- /.container -->
  </section>
</template>


<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "ServiceTwo",
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
        slidesPerView: 3,
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
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 2
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
