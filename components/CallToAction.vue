<template>
  <section class="call-to-action">
    <div class="container wow fadeInLeft" data-wow-duration="1500ms">
      <div class="row align-items-center">
        <div class="col-xl-9 col-lg-8">
          <div class="call-to-action__content">
            <div class="call-to-action__icon">
              <i class="azino-icon-support"></i>
            </div><!-- /.call-to-action__icon -->
            <h3>Let’s make a difference in <br> the lives of others</h3>
          </div><!-- /.call-to-action__content -->
        </div><!-- /.col-lg-9 -->
        <div class="col-xl-3 col-lg-4 d-flex justify-content-start justify-content-md-center justify-content-xl-end justify-content-lg-end">
          <nuxt-link to="/become-volunteer" class="thm-btn dynamic-radius">Become a Volunteer</nuxt-link>
          <!-- /.thm-btn dynamic-radius -->
        </div><!-- /.col-lg-3 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
        name: "CallToAction"
    }
</script>

<style scoped>

</style>
