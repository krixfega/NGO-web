<template>

  <section class="page-header">
    <div class="page-header__bg" style="background-image: url(/assets/images/backgrounds/page-header-1-1.jpg);"></div>
    <!-- /.page-header__bg -->
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="thm-breadcrumb list-unstyled dynamic-radius">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>-</li>
        <li><span>{{ title }}</span></li>
      </ul><!-- /.thm-breadcrumb list-unstyled -->
    </div><!-- /.container -->
  </section>

</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      }
    }

  }
</script>

<style scoped>

</style>
