<script>
  import Home from './Sections/Home.svelte';
  import Services from './Sections/Services.svelte';
</script>

<style>
  main {
    height: 200vh;
    background: linear-gradient(
      180deg,
      #0082ba 0%,
      #361081 31.36%,
      #23074b 47.19%,
      #23074b 57.34%
    );
  }

  .home-wrapper {
    height: 100vh;
  }
</style>

<main>
  <div class="home-wrapper">
    <Home />
  </div>
  <div class="services-wrapper" id="services">
    <Services />
  </div>
</main>
