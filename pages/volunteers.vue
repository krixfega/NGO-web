<template>
  <div>
    <NavOne />
    <PageHeader title="Volunteers" />
    <Volunteers />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Volunteers from "../components/Volunteers";
  import Footer from "../components/Footer";
  export default {
    components: {
      NavOne,
      PageHeader,
      Volunteers,
      Footer,
    },
    head(){
      return {
        title: "Azino | Volunteers"
      }
    }
  }
</script>
