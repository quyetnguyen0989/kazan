<script>
  import HeroSection from "./HeroSection.svelte";
  import SubSection from "./SubSection/index.svelte";
  import RoadmapSection from "./RoadmapSection.svelte";
  import TestimonialSection from "./TestimonialSection.svelte";
  import AboutUsSection from "./AboutUsSection.svelte";
</script>

<style>
  .home {
    background-image: url(images/hero-background.svg);
    background-position: top right;
    background-size: 50%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="home">
  <HeroSection />
  <SubSection />
  <RoadmapSection />
  <TestimonialSection />
  <AboutUsSection />
</div>
