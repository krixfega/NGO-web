<template>
  <div>
    <NavOne />
    <PageHeader title="News Details" />
    <BlogDetails />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogDetails from "../components/BlogDetails";
  export default {
    components: {
      BlogDetails,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | News Details"
      }
    }
  }
</script>
