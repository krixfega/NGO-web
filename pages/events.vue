<template>
  <div>
    <NavOne />
    <PageHeader title="Events" />
    <EventPage />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import EventPage from "../components/EventPage";
  export default {
    components: {
      EventPage,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | Events"
      }
    }
  }
</script>
