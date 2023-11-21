<template>
  <section class="faq-one pt-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="faq-one__content">
            <div class="block-title">
              <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Help People Now</p>
              <h3>Charity for the people <br> you care about.</h3>
            </div><!-- /.block-title -->
            <div id="accordion" class=" wow fadeInUp list-unstyled" data-wow-duration="1500ms">


              <div class="accordion-container-one">
                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Political organization that typically seeks</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">It has survived not only five centuries but also the leap into
                      electronic type setting. when an
                      unknown printer took a galley of type and scrambled to make a type specimen book.
                    </p>
                  </div>
                </div>

                <div class="ac accordion__content">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Strong politics plan require experience</h2>
                  <div class="ac-a">
                    <p class="accordion__content-desc">It has survived not only five centuries but also the leap into
                      electronic type setting. when an
                      unknown printer took a galley of type and scrambled to make a type specimen book.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Attract and retain quality high paying customers</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">It has survived not only five centuries but also the leap into
                      electronic type setting. when an
                      unknown printer took a galley of type and scrambled to make a type specimen book.
                    </p>
                  </div>
                </div>

              </div>
            </div>


          </div><!-- /.faq-one__content -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="about-counter__image clearfix">
            <div class="about-counter__image-content">
              <img src="/assets/images/shapes/about-count-heart-1-1.png" alt="">
              <p>We’re here to support you every step of the way.</p>
            </div><!-- /.about-counter__image-content -->
            <img src="/assets/images/resources/faq-box-1-1.jpg" alt="" class="float-left">
          </div><!-- /.about-counter__image -->

        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "Faq",
  mounted() {
    new Accordion('.accordion-container-one');
  }
}
</script>

<style scoped>
.ac {
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #bcb5b5;
}

.ac > .ac-q {
  font: bold 15px Oswald, sans-serif;
  padding: 10px 30px 10px 10px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  margin: 0;
  color: #192437;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}

.ac.is-active .ac-q {
  color: #d41e44 !important;
}

.ac > .ac-q::after {
  content: '+';
  text-align: center;
  width: 15px;
  right: 10px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  position: absolute
}

.ac > .ac-a {
  overflow: hidden;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease
}

.ac > .ac-a p {
  margin: 0;
  padding: 10px;
  color: #545764;
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}

.ac.js-enabled > .ac-a {
  visibility: hidden
}

.ac.is-active > .ac-a {
  visibility: visible
}

.ac.is-active > .ac-q::after {
  content: '\2013';
  color: #d41e44;
}
</style>
