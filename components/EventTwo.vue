<template>
  <section class="event-home-two pb-120" style="background-image: url(/assets/images/shapes/event-map-1-2.png);">
    <div class="container">
      <div class="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
        <div class="col-lg-7">
          <div class="block-title">
            <p><img src="/assets/images/shapes/heart-2-1.png" width="15" alt="">Latest Event List</p>
            <h3>Checkout our upcoming <br> full event list.</h3>
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
      </div><!-- /.row -->
      <div class="event-grid">
        <div class="event-card">
          <div class="event-card-inner">
            <div class="event-card-image">
              <div class="event-card-image-inner">
                <img src="/assets/images/events/event-1-1.jpg" alt="">
                <span>20 May</span>
              </div><!-- /.event-card-image-inner -->
            </div><!-- /.event-card-image -->
            <div class="event-card-content">
              <h3><nuxt-link to="/event-details">Help for needy people</nuxt-link></h3>
              <ul class="event-card-list">
                <li>
                  <i class="azino-icon-clock"></i>
                  <strong>Time:</strong> 9:00am 02:00pm
                </li>
                <li>
                  <i class="azino-icon-pin1"></i>
                  <strong>Location:</strong> New York
                </li>
              </ul><!-- /.event-card-list -->
            </div><!-- /.event-card-content -->
          </div><!-- /.event-card-inner -->
        </div><!-- /.event-card -->
        <div class="event-card">
          <div class="event-card-inner">
            <div class="event-card-image">
              <div class="event-card-image-inner">
                <img src="/assets/images/events/event-1-2.jpg" alt="">
                <span>20 May</span>
              </div><!-- /.event-card-image-inner -->
            </div><!-- /.event-card-image -->
            <div class="event-card-content">
              <h3><nuxt-link to="/event-details">Funding for Food</nuxt-link></h3>
              <ul class="event-card-list">
                <li>
                  <i class="azino-icon-clock"></i>
                  <strong>Time:</strong> 9:00am 02:00pm
                </li>
                <li>
                  <i class="azino-icon-pin1"></i>
                  <strong>Location:</strong> New York
                </li>
              </ul><!-- /.event-card-list -->
            </div><!-- /.event-card-content -->
          </div><!-- /.event-card-inner -->
        </div><!-- /.event-card -->
        <div class="event-card">
          <div class="event-card-inner">
            <div class="event-card-image">
              <div class="event-card-image-inner">
                <img src="/assets/images/events/event-1-3.jpg" alt="">
                <span>20 May</span>
              </div><!-- /.event-card-image-inner -->
            </div><!-- /.event-card-image -->
            <div class="event-card-content">
              <h3><nuxt-link to="/event-details">Education for children</nuxt-link></h3>
              <ul class="event-card-list">
                <li>
                  <i class="azino-icon-clock"></i>
                  <strong>Time:</strong> 9:00am 02:00pm
                </li>
                <li>
                  <i class="azino-icon-pin1"></i>
                  <strong>Location:</strong> New York
                </li>
              </ul><!-- /.event-card-list -->
            </div><!-- /.event-card-content -->
          </div><!-- /.event-card-inner -->
        </div><!-- /.event-card -->
        <div class="event-card">
          <div class="event-card-inner">
            <div class="event-card-image">
              <div class="event-card-image-inner">
                <img src="/assets/images/events/event-1-4.jpg" alt="">
                <span>20 May</span>
              </div><!-- /.event-card-image-inner -->
            </div><!-- /.event-card-image -->
            <div class="event-card-content">
              <h3><nuxt-link to="/event-details">Donation Day for people</nuxt-link></h3>
              <ul class="event-card-list">
                <li>
                  <i class="azino-icon-clock"></i>
                  <strong>Time:</strong> 9:00am 02:00pm
                </li>
                <li>
                  <i class="azino-icon-pin1"></i>
                  <strong>Location:</strong> New York
                </li>
              </ul><!-- /.event-card-list -->
            </div><!-- /.event-card-content -->
          </div><!-- /.event-card-inner -->
        </div><!-- /.event-card -->
      </div><!-- /.event-grid -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "EventTwo"
}
</script>

<style scoped>

</style>
