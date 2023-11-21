<template>
  <div>
    <NavOne />
    <PageHeader title="News" />
    <BlogPage />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogPage from "../components/BlogPage";
  export default {
    components: {
      BlogPage,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | News"
      }
    }
  }
</script>
