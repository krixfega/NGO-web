<template>
  <div>
    <NavTwo />
    <SliderTwo />
    <ServiceTwo />
    <AboutTwo />
    <VideoCard />
    <Causes />
    <CauseFeatured />
    <Faq />
    <TestimonialOne />
    <Funfact />
    <Pricing />
    <GalleryTwo />
    <EventTwo />
    <BlogHome />
    <Brands />
    <Footer />
  </div>
</template>


<script>

  import NavTwo from "../components/NavTwo";
  import SliderTwo from "../components/SliderTwo";
  import ServiceTwo from "../components/ServiceTwo";
  import AboutTwo from "../components/AboutTwo";
  import VideoCard from "../components/VideoCard";
  import Causes from "../components/Causes";
  import CauseFeatured from "../components/CauseFeatured";
  import Faq from "../components/Faq";
  import TestimonialOne from "../components/TestimonialOne";
  import Funfact from "../components/Funfact";
  import Pricing from "../components/Pricing";
  import GalleryTwo from "../components/GalleryTwo";
  import EventTwo from "../components/EventTwo";
  import Brands from "../components/Brands";
  import Footer from "../components/Footer";
  import BlogHome from "../components/BlogHome";
  export default {
    components: {
      BlogHome,
      Footer,
      Brands,
      EventTwo,
      GalleryTwo,
      Pricing,
      Funfact,
      TestimonialOne,
      Faq,
      CauseFeatured,
      Causes,
      VideoCard,
      AboutTwo,
      ServiceTwo,
      SliderTwo,
      NavTwo
    },
    head(){
      return {
        title: "Azino | Home 2"
      }
    }
  }
</script>
