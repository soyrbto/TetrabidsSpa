<script>
  import { onMount } from "svelte";
  import Home from "../sections/Home.svelte";
  import SecNavbar from "../sections/SecNavbar.svelte";
  import Footer from "../sections/Footer.svelte";
  import NavbarMob from "../sections/NavbarMob.svelte";
  import SectionsMob from "../sections/SectionsMob.svelte";
  import SectionsDesktop from "../sections/SectionsDesktop.svelte";

  import { moveSectionHandler } from "../optimizedFunctions";
  import { visibleSections, desktopSection } from "../StaticStore";
  import {
    sectionItems,
    displayedSection,
    maxWidthTablet,
    nodeSections,
  } from "../Stores.js";

  let homeNode, sectionsNode;

  onMount(() => {
    let nodesArr = [homeNode, sectionsNode];
    nodeSections.set(nodesArr);
  });

  let windowsWidth;
  let active = true;
  let query = document.querySelector.bind(document);

  $: componentSections =
    windowsWidth > $maxWidthTablet ? SectionsDesktop : SectionsMob;

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
        let currentIndex = $sectionItems.navbarSec.findIndex(
          (el) => el === $displayedSection
        );
        e.deltaY > 0
          ? (nextIndex = currentIndex + 1)
          : (nextIndex = currentIndex - 1);
        if (nextIndex >= 2) nextIndex = 2;
        if (nextIndex < 0) nextIndex = 0;
        moveSectionHandler.horizontal($sectionItems.navbarSec[nextIndex]);
      }

      if (
        $displayedSection == $sectionItems.navbarSec[0] ||
        target == desktopSection[0]
      ) {
        let targetPosition;
        // se llama el movimiento en base a la ubicacion de la pantalla y 750ms despues se habilita de nuevo
        targetPosition = query(`#${desktopSection[nextIndex]}`);
        moveSectionHandler.vertical(targetPosition);
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
      height: auto !important;
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
  <main bind:this={homeNode}>
    <div
      on:wheel={windowsWidth > $maxWidthTablet ? sectionDriver : ""}
      class="home-wrapper"
      id={visibleSections[0]}
    >
      <Home />
      <NavbarMob />
    </div>

    <div
      on:wheel={windowsWidth > $maxWidthTablet ? sectionDriver : ""}
      id="section-container"
      class="section-wrapper"
      bind:this={sectionsNode}
    >
      {#if windowsWidth > maxWidthTablet}
        <div class="secnavbar-wrapper">
          <SecNavbar />
        </div>
      {/if}
      <svelte:component this={componentSections} />
    </div>
  </main>
  <Footer />
</div>
