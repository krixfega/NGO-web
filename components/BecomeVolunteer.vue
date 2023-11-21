<template>
<div>
  <section class="become-volunteer pt-120 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="become-volunteer__content mb-40">
            <div class="block-title">
              <p><img src="/assets/images/shapes/heart-2-1.png" alt="" width="15">Join Us Now</p>
              <h3>Register yourself as <br> our volunteer.</h3>
            </div><!-- /.block-title -->
            <p class="block-text mb-40 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Have you done google
              research which works all the time. </p>
            <ul class="list-unstyled ul-list-one">
              <li>Nsectetur cing elit.</li>
              <li>Suspe ndisse suscipit sagittis leo.</li>
              <li>Entum estibulum dignissim posuere.</li>
            </ul><!-- /.list-unstyled list-style-one -->
          </div><!-- /.become-volunteer__content -->
        </div><!-- /.col-lg-5 -->
        <div class="col-lg-7">
          <form class="contact-form-validated become-volunteer__form form-one mb-40" novalidate="novalidate">
            <div class="form-group">
              <div class="form-control">
                <label for="name" class="sr-only">name</label>
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
                <label for="date-of-birth" class="sr-only">date of birth</label>
                <input type="text" name="date" id="date-of-birth" placeholder="Date of Birth">
              </div><!-- /.form-control -->
              <div class="form-control">
                <label for="address" class="sr-only">address</label>
                <input type="text" name="address" id="address" placeholder="Address">
              </div><!-- /.form-control -->
              <div class="form-control">
                <label for="occupation" class="sr-only">occupation</label>
                <input type="text" name="occupation" id="occupation" placeholder="Occupation">
              </div><!-- /.form-control -->
              <div class="form-control form-control-full">
                <label for="message" class="sr-only">message</label>
                <textarea name="message" id="message" placeholder="Write a Message"></textarea>
              </div><!-- /.form-control -->
              <div class="form-control form-control-full">
                <button type="submit" class="thm-btn dynamic-radius" style="border-bottom-left-radius: 36.5px; border-top-left-radius: 36.5px;">Register Now</button>
                <!-- /.thm-btn dynamic-radius -->
              </div><!-- /.form-control -->
            </div><!-- /.form-group -->
          </form><!-- /.become-volunteer__form -->
          <div class="result"></div><!-- /.result -->
        </div><!-- /.col-lg-7 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
  <Brands />
</div>
</template>

<script>
import Brands from "./Brands";
export default {
  name: "BecomeVolunteer",
  components: {Brands}
}
</script>

<style scoped>

</style>
