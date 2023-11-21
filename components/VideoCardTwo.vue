<template>
  <section class="video-card-two">
    <div class="container wow fadeInUp" data-wow-duration="1500ms">
      <div class="inner-container dynamic-radius" style="background-image: url(/assets/images/shapes/video-bg-1-1.png); border-bottom-left-radius: 145.5px; border-top-left-radius: 145.5px;">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="video-card-two__box">
              <img src="/assets/images/resources/video-1-1.png" alt="">
              <a href="https://www.youtube.com/watch?v=yC7lI5XRiW0" class="video-card-two__box-btn video-popup"><i
                class="fa fa-play"></i></a>
              <!-- /.video-card-two__box-btn -->
            </div><!-- /.video-card-two__box -->
          </div><!-- /.col-lg-3 -->
          <div class="col-lg-4">
            <h3>We’re worldwide non-profit charity ogranization.</h3>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-5">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google
              research which works all the time. </p>
          </div><!-- /.col-lg-5 -->
        </div><!-- /.row -->
      </div><!-- /.inner-container -->
    </div><!-- /.container -->
  </section>
</template>

<script>
  export default {
    name: "VideoCardTwo",
    mounted() {
      new GLightbox({
        selector: '.video-popup',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }

  }
</script>

<style scoped>

</style>
