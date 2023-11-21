<template>
  <div>
    <NavOne />
    <PageHeader title="Cause Details" />
    <CauseDetails />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import CauseDetails from "../components/CauseDetails";
  import Footer from "../components/Footer";
  export default {
    components: {
      NavOne,
      PageHeader,
      CauseDetails,
      Footer,
    },
    head(){
      return {
        title: "Azino | Cause Details"
      }
    }
  }
</script>
