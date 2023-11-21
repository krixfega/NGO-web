<template>
  <div>
    <NavOne />
    <PageHeader title="About" />
    <AboutOne />
    <Brands />
    <AboutCounter />
    <Team />
    <VideoCard />
    <TestimonialOne />
    <Footer />
  </div>
</template>


<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import AboutOne from "../components/AboutOne";
  import Brands from "../components/Brands";
  import AboutCounter from "../components/AboutCounter";
  import Team from "../components/Team";
  import VideoCard from "../components/VideoCard";
  import TestimonialOne from "../components/TestimonialOne";
  export default {
    components: {
      TestimonialOne,
      VideoCard,
      Team,
      AboutCounter,
      Brands,
      AboutOne,
      NavOne,
      PageHeader,
      Footer,
    },
    head(){
      return {
        title: "Azino | About"
      }
    }
  }
</script>
