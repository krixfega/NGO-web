<template>
  <div>
    <NavOne />
    <PageHeader title="Contact" />
    <ContactPage />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ContactPage from "../components/ContactPage";
  export default {
    components: {
      ContactPage,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | Contact"
      }
    }
  }
</script>
