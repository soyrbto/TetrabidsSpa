<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import { navbarItems } from "./StaticStore.js";
  $: displaySection = "Productos";

  const changeSection = (e) => {
    if (e.detail === `${navbarItems[0]}`) {
      displaySection = e.detail;
      // here you must put the rest of function // movement to other sections
    } else displaySection = e.detail;
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
  }

  .secnavbar-card-content {
    height: 290px;
    width: 190px;
    padding: 30px;
  }
</style>

<main>
  <div class="home-wrapper">
    <Home on:navbarClicked={changeSection} />
  </div>

  <div class="section-wrapper">
    <div class="secnavbar-wrapper">
      <div class="secnavbar-card-content">
        <SecNavbar on:secNavbarClicked={changeSection} />
      </div>
    </div>
    {#if displaySection === navbarItems[0]}
      <div class="services-wrapper" id="services">
        <Services />
      </div>
    {:else}
      <div class="services-wrapper" id="services">
        <Products />
      </div>
    {/if}
  </div>
</main>
