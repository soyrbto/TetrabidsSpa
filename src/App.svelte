<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";

  $: displaySection = "Servicios";

  const changeSection = (e) => {
    console.log(e.detail);
    displaySection = e.detail;
    console.log(displaySection);
  };
</script>

<style type="text/scss">
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

  .section-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .secnavbar-wrapper {
    width: 118px;
    margin-right: 110px;
    align-self: center;

    .secnavbar-card-content {
      height: 290px;
      width: 190px;
      padding: 30px;
    }
  }
</style>

<main>
  <div class="home-wrapper">
    <Home />
  </div>

  <div class="section-wrapper">
    <div class="secnavbar-wrapper">
      <div class="secnavbar-card-content">
        <SecNavbar on:secNavbarClick={changeSection} />
      </div>
    </div>
    {#if displaySection === 'Servicios'}
      <div class="services-wrapper" id="services">
        <Services />
      </div>
    {/if}
  </div>
</main>
