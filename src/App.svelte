<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import { navbarItems } from "./StaticStore.js";
  import Footer from "./Sections/footer.svelte";
  $: displaySection = "Productos";

  let productBinder;
  let serviceBinder;

  const changeSection = (e) => {
    // IF THE ELEMENT CLICKED IS EQUAL TO "SERVICIOS"
    if (e.detail === `${navbarItems[0]}`) {
      // here you must put the rest of function // movement to other sections
      productBinder.classList.add("slide-out-right");
      setTimeout(() => {
        displaySection = e.detail;
        // serviceBinder.classList.remove("section-wrapper-in");
      }, 600);
    } else {
      serviceBinder.classList.add("slide-out-right");
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

  // .section-wrapper-in {
  //   transform: translateX(1000px);
  // }

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
        <div class="secnavbar-card-content">
          <SecNavbar on:secNavbarClicked={changeSection} />
        </div>
      </div>
      {#if displaySection === navbarItems[0]}
        <div
          bind:this={serviceBinder}
          class="section-wrapper slide-in-right"
          id="services"
        >
          <Services />
        </div>
      {:else}
        <div
          bind:this={productBinder}
          class="section-wrapper slide-in-right"
          id="services"
        >
          <Products />
        </div>
      {/if}
    </div>
  </main>
  <Footer />
</div>
