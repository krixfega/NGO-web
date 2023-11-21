<template>
  <section class="gallery-home-two pt-120 pb-120">
    <div class="container">
      <img src="/assets/images/shapes/gallery-dot-1-1.png" alt="" class="gallery-home-two__dots">
      <div class="thm-swiper__slider swiper-container">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-1.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-1.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-2.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-2.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-3.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-3.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-4.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-4.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-1.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-1.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-2.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-2.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-3.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-3.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-4.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-4.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-1.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-1.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-2.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-2.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-3.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-3.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
          <swiper-slide>
          <div class="swiper-slide">
            <div class="gallery-card">
              <img src="/assets/images/gallery/gallery-2-4.jpg" class="img-fluid" alt="">
              <div class="gallery-content">
                <a href="/assets/images/gallery/gallery-2-4.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
              </div><!-- /.gallery-content -->
            </div><!-- /.gallery-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>
        </swiper>
      </div><!-- /.swiper-container -->
    </div><!-- /.container -->
  </section>
</template>


<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: "GalleryTwo",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted() {
    new GLightbox({
      selector: '.img-popup',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView : 4,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
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
          1024:{
            slidesPerView : 4
          },
          768:{
            slidesPerView : 2
          },
          640:{
            slidesPerView : 2
          },
          320:{
            slidesPerView : 1
          }
        }
      },

    }
  },
}
</script>

<style scoped>

</style>
