<script>
  import Home from "../sections/Home.svelte";
  import Services from "../sections/Services.svelte";
  import SecNavbar from "../sections/SecNavbar.svelte";
  import Footer from "../sections/Footer.svelte";
  import NavbarMob from "../sections/NavbarMob.svelte";
  import Products from "../sections/Products.svelte";
  import Contact from "../sections/Contact.svelte";
  import NavButton from "../components/NavButton.svelte";

  import { moveSectionHandler } from "../optimizedFunctions";

  import {
    secNavbarItems,
    visibleSections,
    desktopSection,
  } from "../StaticStore";

  import {
    displayedSection,
    displayedState,
    screenDisplacer,
    nodeSections,
    maxWidthTablet,
  } from "../Stores.js";

  // binding nodes of the sections when windowsWidth
  let contact, product, service;

  // set the nodes on nodeSections to a writable in store
  setTimeout(() => {
    let nodes = [service, product, contact];
    nodeSections.set(nodes);
  }, 200);

  let windowsWidth;
  let active = true;
  let query = document.querySelector.bind(document);

  //funcion que hace la traslacion si el ancho de pantalla es mayor a 980
  const sectionDriver = (e) => {
    e.preventDefault();
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
        moveSectionHandler.horizontal(secNavbarItems[nextIndex]);
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
  };
</script>

<style type="text/scss">
  .page-container {
    position: relative;
    height: 208vh;
    overflow: hidden;
  }

  @media screen and (max-width: 1280px) {
    // HEIGHT 800PX PER SECTION
    .page-container {
      // height: 3272px;
      height: auto;
    }
    main {
      // height: 3200px !important;
      height: auto !important;
      background: linear-gradient(
        180deg,
        #0082ba 0%,
        #361081 31.36%,
        #23074b 47.19%,
        #fff 57.34%
      ) !important;
    }

    .home-wrapper {
      height: 800px !important;
    }

    .section-wrapper {
      flex-direction: column;
      justify-content: flex-end !important;
      height: 100vh;
    }
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
    // background-image: url(/images/background-white-shape.svg);
    border-radius: 0 0 50px 50px;
  }

  .home-wrapper {
    height: 100vh;
    position: relative;
  }

  .section-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all;
    height: 92vh;
    background-image: url(/images/background-white-shape.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
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
      on:wheel={windowsWidth > maxWidthTablet ? sectionDriver : ""}
      class="home-wrapper"
      id={visibleSections[0]}
    >
      <Home />
      <NavbarMob />
    </div>

    {#if windowsWidth > maxWidthTablet}
      <div
        on:wheel={windowsWidth > maxWidthTablet ? sectionDriver : ""}
        id="section-container"
        class="section-wrapper"
      >
        {#if windowsWidth > maxWidthTablet}
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
            class:slide-out-right={$displayedState["Productos"]}
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
    {/if}

    {#if windowsWidth <= maxWidthTablet}
      <div
        class="slide-in-right {secNavbarItems[0]}"
        id={visibleSections[0]}
        bind:this={service}
      >
        <Services />
      </div>

      <div
        class="slide-in-right {secNavbarItems[1]}"
        id={visibleSections[1]}
        bind:this={product}
      >
        <Products />
      </div>

      <div
        class="slide-in-right {secNavbarItems[2]}"
        id={visibleSections[2]}
        bind:this={contact}
        style="margin-top: 60px;"
      >
        <Contact />
      </div>
    {/if}
  </main>
  <Footer />
</div>
