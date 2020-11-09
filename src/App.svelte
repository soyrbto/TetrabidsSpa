<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import { secNavbarItems, visibleSections } from "./StaticStore.js";
  import Footer from "./Sections/Footer.svelte";
  import Contact from "./Sections/Contact.svelte";
  import {
    displayedSection,
    displayedState,
    changeSection,
    screenDisplacer,
  } from "./Stores";

  let windowsWidth;

  const sectionDriver = (e) => {
    e.preventDefault();
    if (windowsWidth > 980) {
      // identifico target como el id del elemento donde wheeled
      let target = e.currentTarget.getAttribute("id");
      //reidentifico el target por la seccion que se esta mostrando si sucede en el
      //container de la seccion
      target == "section-container"
        ? (target = $displayedSection)
        : (target = target);
      //consigo el indice de mi target
      let currentIndex = visibleSections.findIndex((elmnt) => elmnt == target);

      //si esta en el arreglo suma o resta
      let nextIndex;
      e.deltaY > 0
        ? (nextIndex = currentIndex + 1)
        : (nextIndex = currentIndex - 1);

      // si se escrollea hacia arriba desde la seccion de servicios
      if (nextIndex <= 0) {
        nextIndex = 1;
        let startPosition = document.querySelector("#section-container")
          .offsetTop;
        let targetPosition = document.querySelector("#Home").offsetTop;
        console.log(`${startPosition} ${targetPosition}`);
        screenDisplacer(startPosition, targetPosition);
      }
      // si se hace scroll hacia abajo de contacto
      if (nextIndex >= 3) {
        nextIndex = 3;
      }
      // si se mueve la rueda hacia abajo desde servicios o hacia arriba desde contacto
      changeSection(visibleSections[nextIndex]);

      //si se mueve la rueda hacia abajo desde el home
      if (target == "Home" && nextIndex == 1) {
        screenDisplacer(0, 1080);
      }
    }
  };
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
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="page-container">
  <main>
    <div
      on:mousewheel={sectionDriver}
      class="home-wrapper"
      id={visibleSections[0]}
    >
      <Home />
    </div>

    <div
      on:mousewheel={sectionDriver}
      id="section-container"
      class="section-wrapper"
    >
      {#if windowsWidth > 1160}
        <div class="secnavbar-wrapper">
          <SecNavbar />
        </div>
      {/if}

      {#if $displayedSection === secNavbarItems[0]}
        <div
          class:slide-out-right={$displayedState[secNavbarItems[0]]}
          class="slide-in-right {secNavbarItems[0]}"
          id={visibleSections[0]}
        >
          <Services />
        </div>
      {:else if $displayedSection === secNavbarItems[1]}
        <div
          class:slide-out-right={$displayedState['Productos']}
          class="slide-in-right {secNavbarItems[1]}"
          id={visibleSections[1]}
        >
          <Products />
        </div>
      {:else if $displayedSection === secNavbarItems[2]}
        <div
          class:slide-out-right={$displayedState[secNavbarItems[2]]}
          class="slide-in-right {secNavbarItems[2]}"
          id={visibleSections[2]}
        >
          <Contact />
        </div>
      {/if}
    </div>
  </main>
  <Footer />
</div>
