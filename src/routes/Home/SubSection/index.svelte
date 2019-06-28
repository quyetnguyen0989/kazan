<script>
  import MissionSection from "./MissionSection.svelte";
  import FirstDetailSection from "./FirstDetailSection.svelte";
  import SecondDetailSection from "./SecondDetailSection.svelte";
  import ThirdDetailSection from "./ThirdDetailSection.svelte";
</script>

<style lang="scss">
  .sub-sections {
    padding: 0 0;
  }
  hr {
    border: 0.5px solid $aquamarineBlue;
    margin: 140px 0;
  }
</style>

<div class="sub-sections">
  <MissionSection />
  <hr />

  <FirstDetailSection />
  <SecondDetailSection />
  <ThirdDetailSection />
  <hr />

</div>
