<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import { secNavbarItems } from "./StaticStore.js";
  import Footer from "./Sections/Footer.svelte";
  import Contact from "./Sections/Contact.svelte";

  $: displaySection = secNavbarItems[2];

  const changeSection = (e) => {
    if (displaySection != e.detail) {
      document
        .querySelector(`.${displaySection}`)
        .classList.add("slide-out-right");

      setTimeout(() => {
        displaySection = e.detail;
      }, 600);
    }
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
    border-radius: 0 0 50px 50px;
  }

  .home-wrapper {
    height: 100vh;
  }

  .section-wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    transition: all;
  }

  .secnavbar-wrapper {
    width: 118px;
    margin-right: 110px;
    align-self: center;
  }

  .page-container {
    position: relative;
    height: 208vh;
  }
</style>

<div class="page-container">
  <main>
    <div class="home-wrapper">
      <Home on:navbarClicked={changeSection} />
    </div>

    <div class="section-wrapper">
      <div class="secnavbar-wrapper">
        <SecNavbar on:secNavbarClicked={changeSection} />
      </div>
      {#if displaySection === secNavbarItems[0]}
        <div class="section-wrapper slide-in-right {secNavbarItems[0]}">
          <Services />
        </div>
      {:else if displaySection === secNavbarItems[1]}
        <div class="section-wrapper slide-in-right {secNavbarItems[1]}">
          <Products />
        </div>
      {:else if displaySection === secNavbarItems[2]}
        <div class="section-wrapper slide-in-right {secNavbarItems[2]}">
          <Contact />
        </div>
      {/if}
    </div>
  </main>
  <Footer />
</div>
