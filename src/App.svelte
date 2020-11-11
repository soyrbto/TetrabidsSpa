<script>
  import Home from "./Sections/Home.svelte";
  import Services from "./Sections/Services.svelte";
  import SecNavbar from "./Sections/SecNavbar.svelte";
  import Products from "./Sections/Products.svelte";
  import {
    secNavbarItems,
    visibleSections,
    desktopSection,
  } from "./StaticStore.js";
  import Footer from "./Sections/Footer.svelte";
  import Contact from "./Sections/Contact.svelte";
  import {
    displayedSection,
    displayedState,
    changeSection,
    screenDisplacer,
  } from "./Stores";

  let windowsWidth;
  let active = true;
  let query = document.querySelector.bind(document);

  //funcion que hace la traslacion si el ancho de pantalla es mayor a 980
  const sectionDriver = (e) => {
    e.preventDefault();
    if (windowsWidth > 200) {
      if (active == true) {
        let target = e.currentTarget.getAttribute("id");
        let currentIndex = desktopSection.findIndex((el) => el === target);
        let nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

        //evita que siga debajo de section container o antes de home
        if (nextIndex < 0) nextIndex = 0;
        if (target !== "Home") {
          nextIndex = 1;
          let currentIndex = secNavbarItems.findIndex(
            (el) => el === $displayedSection
          );
          e.deltaY > 0
            ? (nextIndex = currentIndex + 1)
            : (nextIndex = currentIndex - 1);

          if (nextIndex >= 2) nextIndex = 2;
          if (nextIndex < 0) nextIndex = 0;
          changeSection(secNavbarItems[nextIndex]);
        }

        if (
          $displayedSection == secNavbarItems[0] ||
          target == desktopSection[0]
        ) {
          let startPosition, targetPosition;
          // se llama el movimiento en base a la ubicacion de la pantalla y 750ms despues se habilita de nuevo
          startPosition = query(`#${desktopSection[currentIndex]}`).offsetTop;
          targetPosition = query(`#${desktopSection[nextIndex]}`).offsetTop;
          screenDisplacer(startPosition, targetPosition, 750);
        }
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
    <div on:wheel={sectionDriver} class="home-wrapper" id={visibleSections[0]}>
      <Home />
    </div>

    <div
      on:wheel={sectionDriver}
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
