<template>
  <div>
    <NavOne />
    <PageHeader title="Gallery" />
    <GalleryPage />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import GalleryPage from "../components/GalleryPage";
  export default {
    components: {
      GalleryPage,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | Gallery"
      }
    }
  }
</script>
