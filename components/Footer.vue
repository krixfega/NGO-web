<template>
  <section class="site-footer">
    <div class="main-footer pt-142 pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget mb-40 footer-widget__about">
              <nuxt-link to="/" aria-label="logo image">
                <img src="/assets/images/logo-light.png" class="footer-widget__logo" width="101" alt="">
              </nuxt-link>
              <p>Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.</p>
              <ul class="list-unstyled footer-widget__contact">
                <li><a href="#"><i class="azino-icon-telephone"></i>666 888 0000</a></li>
                <li><a href="#"><i class="azino-icon-email"></i>needhelp@azino.com</a></li>
                <li><a href="#"><i class="azino-icon-pin"></i>88 Broklyn Golden Street, USA</a></li>
              </ul><!-- /.footer-widget__contact -->
            </div><!-- /.footer-widget footer-widget__about -->
          </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget footer-widget__link mb-40">
              <h3 class="footer-widget__title">Explore</h3><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__link-list">
                <li><a href="/causes">Our Causes</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/news">New Campaign</a></li>
                <li><a href="/events">Upcoming Events</a></li>
                <li><a href="/about">Site Map</a></li>
                <li><a href="/contact">Help</a></li>
                <li><a href="/causes">Donate</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/contact">Terms</a></li>
              </ul><!-- /.footer-widget__link-list -->
            </div><!-- /.footer-widget footer-widget__link -->
          </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget mb-40 footer-widget__blog">
              <h3 class="footer-widget__title">Blog</h3><!-- /.footer-widget__title -->
              <ul class="list-unstyled footer-widget__blog">
                <li>
                  <img src="/assets/images/resources/footer-img-1-1.jpg" alt="">
                  <p>22 May, 2020</p>
                  <h3><a href="/news-details">You can help the poor in need</a></h3>
                </li>
                <li>
                  <img src="/assets/images/resources/footer-img-1-2.jpg" alt="">
                  <p>22 May, 2020</p>
                  <h3><a href="/news-details">Rise fund for Healthy Food</a></h3>
                </li>
              </ul><!-- /.footer-widget__blog -->
            </div><!-- /.footer-widget footer-widget__blog -->
          </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget mb-40 footer-widget__newsletter">
              <h3 class="footer-widget__title">Newletter</h3><!-- /.footer-widget__title -->
              <p>Signup now to get daily latest news
                & updates from us</p>
              <form class="footer-widget__newsletter-form mc-form">
                <label for="mc-email" class="sr-only">Email Address</label>
                <input type="email" name="EMAIL" id="mc-email" class="dynamic-radius" placeholder="Email address">
                <div class="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                  <button type="submit" class="thm-btn dynamic-radius">Subscribe Now</button>
                </div><!-- /.footer-widget__newsletter-btn-wrap -->
                <!-- /.thm-btn -->
              </form><!-- /.footer-widget__newsletter-form -->
              <div class="mc-form__response"></div><!-- /.mc-form__response -->
            </div><!-- /.footer-widget footer-widget__newsletter -->
          </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.main-footer -->
    <div class="footer-bottom">
      <div class="container">
        <span @click="scrollTop" class="scroll-to-top scroll-to-target" data-target="html"><i class="far fa-angle-up"></i></span>
        <p>© Copyright 2021 by Layerdrops.com</p>
        <div class="footer-social">
          <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="facebook"><i class="fab fa-facebook-square"></i></a>
          <a href="#" aria-label="pinterest"><i class="fab fa-pinterest-p"></i></a>
          <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
        </div><!-- /.footer-social -->
      </div><!-- /.container -->
    </div><!-- /.footer-bottom -->
  </section>
</template>

<script>
  export default {
    name: "Footer",
    methods: {
      scrollTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped>

</style>
