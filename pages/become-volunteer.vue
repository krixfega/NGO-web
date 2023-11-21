<template>
  <div>
    <NavOne />
    <PageHeader title="Become a volunteer" />
    <BecomeVolunteer />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  export default {
    components: {
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | Become a volunteer"
      }
    }
  }
</script>
