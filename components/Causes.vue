<template>
  <section class="causes-page causes-home pt-120 pb-120">
    <div class="container">
      <div class="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
        <div class="col-lg-7">
          <div class="block-title">
            <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Popular Causes</p>
            <h3>Donate to charity causes <br> around the world.</h3>
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
      <div class="thm-swiper__slider">
          <swiper :options="swiperOptions">
            <swiper-slide>
                <div class="cause-card">
                  <div class="cause-card__inner">
                    <div class="cause-card__image">
                      <img src="/assets/images/causes/cause-1-1.jpg" alt="">
                    </div><!-- /.cause-card__image -->
                    <div class="cause-card__content">
                      <div class="cause-card__top">
                        <div class="cause-card__progress">
                                                <span style="width: 23%;" class="wow cardProgress"
                                                      data-wow-duration="1500ms">
                                                    <b><i>23</i>%</b>
                                                </span>
                        </div><!-- /.cause-card__progress -->
                        <div class="cause-card__goals">
                          <p><strong>Raised:</strong> $25,270</p>
                          <p><strong>Goal:</strong> $30,000</p>
                        </div><!-- /.cause-card__goals -->
                      </div><!-- /.cause-card__top -->
                      <h3>
                        <nuxt-link to="/cause-details">Our donation is hope for poor childrens</nuxt-link>
                      </h3>
                      <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                      <div class="cause-card__bottom">
                        <nuxt-link to="/cause-details" class="thm-btn dynamic-radius">Donate Now</nuxt-link>
                        <!-- /.thm-btn dynamic-radius -->
                        <a href="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></a>
                        <!-- /.cause-card__share -->
                      </div><!-- /.cause-card__bottom -->
                    </div><!-- /.cause-card__content -->
                  </div><!-- /.cause-card__inner -->
                </div><!-- /.cause-card -->
            </swiper-slide>
            <swiper-slide>
                <div class="cause-card">
                  <div class="cause-card__inner">
                    <div class="cause-card__image">
                      <img src="/assets/images/causes/cause-1-4.jpg" alt="">
                    </div><!-- /.cause-card__image -->
                    <div class="cause-card__content">
                      <div class="cause-card__top">
                        <div class="cause-card__progress">
                                                <span style="width: 65%;" class="wow cardProgress"
                                                      data-wow-duration="1500ms">
                                                    <b><i>65</i>%</b>
                                                </span>
                        </div><!-- /.cause-card__progress -->
                        <div class="cause-card__goals">
                          <p><strong>Raised:</strong> $25,270</p>
                          <p><strong>Goal:</strong> $30,000</p>
                        </div><!-- /.cause-card__goals -->
                      </div><!-- /.cause-card__top -->
                      <h3>
                        <nuxt-link to="/cause-details">Education for Poor Children</nuxt-link>
                      </h3>
                      <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                      <div class="cause-card__bottom">
                        <nuxt-link to="/cause-details" class="thm-btn dynamic-radius">Donate Now</nuxt-link>
                        <!-- /.thm-btn dynamic-radius -->
                        <a href="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></a>
                        <!-- /.cause-card__share -->
                      </div><!-- /.cause-card__bottom -->
                    </div><!-- /.cause-card__content -->
                  </div><!-- /.cause-card__inner -->
                </div><!-- /.cause-card -->
            </swiper-slide>

            <swiper-slide>

                <div class="cause-card">
                  <div class="cause-card__inner">
                    <div class="cause-card__image">
                      <img src="/assets/images/causes/cause-1-3.jpg" alt="">
                    </div><!-- /.cause-card__image -->
                    <div class="cause-card__content">
                      <div class="cause-card__top">
                        <div class="cause-card__progress">
                                                <span style="width: 55%;" class="wow cardProgress"
                                                      data-wow-duration="1500ms">
                                                    <b><i>55</i>%</b>
                                                </span>
                        </div><!-- /.cause-card__progress -->
                        <div class="cause-card__goals">
                          <p><strong>Raised:</strong> $25,270</p>
                          <p><strong>Goal:</strong> $30,000</p>
                        </div><!-- /.cause-card__goals -->
                      </div><!-- /.cause-card__top -->
                      <h3>
                        <nuxt-link to="/cause-details">Promoting The Rights of Children</nuxt-link>
                      </h3>
                      <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
                      <div class="cause-card__bottom">
                        <nuxt-link to="/cause-details" class="thm-btn dynamic-radius">Donate Now</nuxt-link>
                        <!-- /.thm-btn dynamic-radius -->
                        <a href="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></a>
                        <!-- /.cause-card__share -->
                      </div><!-- /.cause-card__bottom -->
                    </div><!-- /.cause-card__content -->
                  </div><!-- /.cause-card__inner -->
                </div><!-- /.cause-card -->
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
    name: "Causes",
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
