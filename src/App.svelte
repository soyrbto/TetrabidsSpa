<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import { secNavbarItems } from "./StaticStore.js";
  import Footer from "./Sections/Footer.svelte";
  import Contact from "./Sections/Contact.svelte";
  import { displayedSection, displayedState } from "./Stores";

  let windowsWidth;
</script>

<style type="text/scss">
  .page-container {
    position: relative;
    height: 208vh;
    overflow: hidden;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200vh;
    background: linear-gradient(
      180deg,
      #0082ba 0%,
      #361081 31.36%,
      #23074b 47.19%,
      #23074b 57.34%
    );
    border-radius: 0 0 50px 50px;
  }

  .home-wrapper {
    height: 100vh;
  }

  .section-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all;
    height: 92vh;
  }

  .secnavbar-wrapper {
    display: flex;
    flex-direction: column;
    //META 118px
    width: 6.14vw;
    //META 110PX
    margin-right: 5.72vw;
  }

  .active {
    background: red;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="page-container">
  <main>
    <div class="home-wrapper">
      <Home />
    </div>

    <div class="section-wrapper">
      {#if windowsWidth > 1160}
        <div class="secnavbar-wrapper">
          <SecNavbar />
        </div>
      {/if}

      {#if $displayedSection === secNavbarItems[0]}
        <div
          class:slide-out-right={$displayedState[secNavbarItems[0]]}
          class="slide-in-right {secNavbarItems[0]}"
        >
          <Services />
        </div>
      {:else if $displayedSection === secNavbarItems[1]}
        <div
          class:slide-out-right={$displayedState['Productos']}
          class="slide-in-right {secNavbarItems[1]}"
        >
          <Products />
        </div>
      {:else if $displayedSection === secNavbarItems[2]}
        <div
          class:slide-out-right={$displayedState[secNavbarItems[2]]}
          class="slide-in-right {secNavbarItems[2]}"
        >
          <Contact />
        </div>
      {/if}
    </div>
  </main>
  <Footer />
</div>
