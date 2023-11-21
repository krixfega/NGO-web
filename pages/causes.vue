<template>
  <div>
    <NavOne />
    <PageHeader title="Causes" />
    <CausesPage />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import CausesPage from "../components/CausesPage";
  export default {
    components: {
      CausesPage,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | Causes"
      }
    }
  }
</script>
