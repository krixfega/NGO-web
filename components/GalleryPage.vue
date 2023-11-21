<template>
  <section class="gallery-page pt-120 pb-120">
    <div class="container">
      <div class="gallery-3-col">
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-1.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-1.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-2.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-2.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-3.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-3.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-4.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-4.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-5.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-5.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-6.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-6.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-7.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-7.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-8.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-8.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
        <div class="gallery-card">
          <img src="/assets/images/gallery/gallery-1-9.jpg" class="img-fluid" alt="">
          <div class="gallery-content">
            <a href="/assets/images/gallery/gallery-1-9.jpg" class="img-popup" aria-label="open image"><i class="fal fa-plus"></i></a>
          </div><!-- /.gallery-content -->
        </div><!-- /.gallery-card -->
      </div><!-- /.gallery-3-col -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "GalleryPage",
  mounted() {
    new GLightbox({
      selector: '.img-popup',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  },
}
</script>

<style scoped>

</style>
