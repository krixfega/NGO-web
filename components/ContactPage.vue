<template>
<div>
  <section class="contact-page pt-120 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="contact-page__content mb-40">
            <div class="block-title">
              <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Contact With Us</p>
              <h3>Feel free to write us <br> a message.</h3>
            </div><!-- /.block-title -->
            <p class="block-text mb-30 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Have you done google
              research which works all the time. </p>
            <div class="footer-social black-hover">
              <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
              <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
              <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
            </div><!-- /.footer-social -->
          </div><!-- /.contact-page__content -->
        </div><!-- /.col-lg-5 -->
        <div class="col-lg-7">
          <form class="contact-form-validated contact-page__form form-one mb-40">
            <div class="form-group">
              <div class="form-control">
                <label for="name" class="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name">
              </div><!-- /.form-control -->
              <div class="form-control">
                <label for="email" class="sr-only">email</label>
                <input type="text" name="email" id="email" placeholder="Email Address">
              </div><!-- /.form-control -->
              <div class="form-control">
                <label for="phone" class="sr-only">phone</label>
                <input type="text" name="phone" id="phone" placeholder="Phone Number">
              </div><!-- /.form-control -->
              <div class="form-control">
                <label for="subject" class="sr-only">subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject">
              </div><!-- /.form-control -->
              <div class="form-control form-control-full">
                <label for="message" class="sr-only">message</label>
                <textarea name="message" placeholder="Write a Message" id="message"></textarea>
              </div><!-- /.form-control -->
              <div class="form-control form-control-full">
                <button type="submit" class="thm-btn dynamic-radius">Submit Message</button>
                <!-- /.thm-btn dynamic-radius -->
              </div><!-- /.form-control -->
            </div><!-- /.form-group -->
          </form><!-- /.contact-page__form -->
          <div class="result"></div><!-- /.result -->
        </div><!-- /.col-lg-7 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.contact-page -->

  <div class="contact-card-carousel ">
    <div class="container">
      <div class="thm-swiper__slider swiper-container">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="swiper-slide">
            <div class="contact-card d-flex flex-column text-center justify-content-center align-items-center background-secondary" style="background-image: url(/assets/images/shapes/contact-card-bg-1-1.png);">
              <i aria-label="contact icon" class="azino-icon-family"></i>
              <h3>About</h3>
              <p>Lorem ipsum is simply free text <br> dolor sit amet, consectetur <br> adipiscing ullam blandit</p>
            </div><!-- /.contact-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>

          <swiper-slide>
          <div class="swiper-slide">
            <div class="contact-card d-flex flex-column text-center justify-content-center align-items-center background-primary" style="background-image: url(/assets/images/shapes/contact-card-bg-1-1.png);">
              <i aria-label="contact icon" class="azino-icon-address"></i>
              <h3>Address</h3>
              <p>88 Broklyn Golden Street, <br> New York. United States of <br> America.</p>
            </div><!-- /.contact-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>

          <swiper-slide>
          <div class="swiper-slide">
            <div class="contact-card d-flex flex-column text-center justify-content-center align-items-center background-special" style="background-image: url(/assets/images/shapes/contact-card-bg-1-1.png);">
              <i aria-label="contact icon" class="azino-icon-contact"></i>
              <h3>Contact</h3>
              <p><a href="mailto:">needhelp@azino.com</a> <br> <a href="tel:666-888-0000">666 888 0000</a></p>
            </div><!-- /.contact-card -->
          </div><!-- /.swiper-slide -->
          </swiper-slide>

        </swiper>
      </div><!-- /.thm-swiper__slider -->
    </div><!-- /.container -->
  </div><!-- /.contact-card-carousel -->

  <div class="google-map__contact">
    <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="map__contact" allowfullscreen></iframe>
  </div>

</div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "ContactPage",
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
