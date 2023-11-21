<template>
  <section class="news-page news-home pt-120 pb-120">
    <div class="container">
      <div class="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
        <div class="col-lg-7">
          <div class="block-title">
            <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Blog Posts</p>
            <h3>Latest news & articles <br> directly from the blog.</h3>
          </div><!-- /.block-title -->
        </div><!-- /.col-lg-7 -->
        <div class="col-lg-5 d-flex">
          <div class="my-auto">
            <p class="block-text pr-10 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Have
              you done google research which works all the time. </p><!-- /.block-text -->
          </div><!-- /.my-auto -->
        </div><!-- /.col-lg-5 -->
      </div>
      <div class="swiper-container thm-swiper__slider">
        <div class="swiper-wrapper">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="swiper-slide">
                <div class="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                  <div class="blog-card">
                    <div class="blog-card__inner">
                      <div class="blog-card__image">
                        <img src="/assets/images/blog/blog-1-1.jpg" alt="">
                        <div class="blog-card__date">20 May</div><!-- /.blog-card__date -->
                      </div><!-- /.blog-card__image -->
                      <div class="blog-card__content">
                        <div class="blog-card__meta">
                          <nuxt-link to="/news-details"><i class="far fa-user-circle"></i> Admin</nuxt-link>
                          <nuxt-link to="/news-details"><i class="far fa-comments"></i> 2 Comments</nuxt-link>
                        </div><!-- /.blog-card__meta -->
                        <h3><nuxt-link to="/news-details">Our donation is hope for poor childrens</nuxt-link></h3>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                        <nuxt-link to="/news-details" class="blog-card__more"><i class="far fa-angle-right"></i>Read More</nuxt-link>
                        <!-- /.blog-card__more -->
                      </div><!-- /.blog-card__content -->
                    </div><!-- /.blog-card__inner -->
                  </div><!-- /.blog-card -->
                </div><!-- /.wow fadeInLeft -->
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>
              <div class="swiper-slide">
                <div class="wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">

                  <div class="blog-card">
                    <div class="blog-card__inner">
                      <div class="blog-card__image">
                        <img src="/assets/images/blog/blog-1-2.jpg" alt="">
                        <div class="blog-card__date">20 May</div><!-- /.blog-card__date -->
                      </div><!-- /.blog-card__image -->
                      <div class="blog-card__content">
                        <div class="blog-card__meta">
                          <nuxt-link to="/news-details"><i class="far fa-user-circle"></i> Admin</nuxt-link>
                          <nuxt-link to="/news-details"><i class="far fa-comments"></i> 2 Comments</nuxt-link>
                        </div><!-- /.blog-card__meta -->
                        <h3><nuxt-link to="/news-details">Education for Poor Children</nuxt-link></h3>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                        <nuxt-link to="/news-details" class="blog-card__more"><i class="far fa-angle-right"></i>Read More</nuxt-link>
                        <!-- /.blog-card__more -->
                      </div><!-- /.blog-card__content -->
                    </div><!-- /.blog-card__inner -->
                  </div><!-- /.blog-card -->
                </div><!-- /.wow fadeInLeft -->
              </div><!-- /.swiper-slide -->
            </swiper-slide>

            <swiper-slide>
              <div class="swiper-slide">

                <div class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">

                  <div class="blog-card">
                    <div class="blog-card__inner">
                      <div class="blog-card__image">
                        <img src="/assets/images/blog/blog-1-3.jpg" alt="">
                        <div class="blog-card__date">20 May</div><!-- /.blog-card__date -->
                      </div><!-- /.blog-card__image -->
                      <div class="blog-card__content">
                        <div class="blog-card__meta">
                          <nuxt-link to="/news-details"><i class="far fa-user-circle"></i> Admin</nuxt-link>
                          <nuxt-link to="/news-details"><i class="far fa-comments"></i> 2 Comments</nuxt-link>
                        </div><!-- /.blog-card__meta -->
                        <h3><nuxt-link to="/news-details">Promoting The Rights of Children</nuxt-link></h3>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                        <nuxt-link to="/news-details" class="blog-card__more"><i class="far fa-angle-right"></i>Read More</nuxt-link>
                        <!-- /.blog-card__more -->
                      </div><!-- /.blog-card__content -->
                    </div><!-- /.blog-card__inner -->
                  </div><!-- /.blog-card -->
                </div><!-- /.wow fadeInLeft -->
              </div><!-- /.swiper-slide -->
            </swiper-slide>

          </swiper>
        </div><!-- /.swiper-wrapper -->
      </div><!-- /.news-3-col -->
    </div><!-- /.container -->
  </section>
</template>

<script>
  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "BlogHome",
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
