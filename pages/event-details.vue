<template>
  <div>
    <NavOne />
    <PageHeader title="Event Details" />
    <EventDetails />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import EventDetails from "../components/EventDetails";
  import Footer from "../components/Footer";
  export default {
    components: {
      NavOne,
      PageHeader,
      EventDetails,
      Footer,
    },
    head(){
      return {
        title: "Azino | Event Details"
      }
    }
  }
</script>
