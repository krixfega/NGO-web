<template>
  <section class="video-card">
    <div class="video-card__bg" style="background-image: url(/assets/images/backgrounds/page-header-1-1.jpg);"></div>
    <!-- /.video-card__bg -->
    <div class="container text-center pt-120 pb-120">
      <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Help Other People</p>
      <h3>Our fingerprints on the <br>
        lives we touch never fade.</h3>
      <div class="video-card__btn-block">
        <nuxt-link to="/cause-details" class="thm-btn dynamic-radius">Start Donating</nuxt-link>
        <!-- /.thm-btn dynamic-radius -->
        <a href="https://www.youtube.com/watch?v=yC7lI5XRiW0" class="video-popup video-card__btn"><i class="fa fa-play"></i></a><!-- /.video-card__btn -->
      </div><!-- /.video-card__btn-block -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "VideoCard",
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
