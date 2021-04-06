<script>
  import { beforeUpdate, onMount } from "svelte";
  import NavbarDesktop from "../sections/NavbarDesktop.svelte";
  import Home from "../sections/Home.svelte";
  import NavbarSec from "../sections/NavbarSec.svelte";
  import Footer from "../sections/Footer.svelte";
  import SectionsMob from "../sectionsMobile/SectionsMob.svelte";
  import SectionsDesktop from "../sections/SectionsDesktop.svelte";
  import NavbarMob from "../sectionsMobile/NavbarMob.svelte";
  import { instructionsMap, mapDriver } from "../functions";
  import { visibleSections } from "../StaticStore";
  import { maxWidthTablet, nodeSections } from "../Stores.js";

  let homeNode, sectionsNode, navbarType;

  onMount(() => {
    let nodesArr = [homeNode, sectionsNode];
    nodeSections.set(nodesArr);
  });

  beforeUpdate(() => {
    window.scrollTo(0, 0);
  });

  let windowsWidth;

  $: componentSections =
    windowsWidth > $maxWidthTablet ? SectionsDesktop : SectionsMob;

  $: navbarType = windowsWidth <= 768 ? NavbarMob : NavbarDesktop;

  $: isDesktop = windowsWidth > $maxWidthTablet;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .page-container {
    position: relative;
    overflow: hidden;
    font-family: $font-primary;

    main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 0 0 50px 50px;
      background: linear-gradient(
        180deg,
        #0082ba 0%,
        #361081 31.36%,
        #23074b 47.19%,
        #23074b 57.34%
      );

      .home-wrapper {
        height: 100vh;
        position: relative;

        @include respond(tab-land) {
          height: 800px;
        }
      }

      .section-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all;
        height: 92vh;
        padding: 0 3.5vw;
        background-image: url(/images/background-white-shape.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100%;

        @include respond(tab-land) {
          flex-direction: column;
          justify-content: flex-end;
          height: auto;
          padding: 0;
        }

        .secnavbar-wrapper {
          width: 6.14vw; // 118px
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="page-container">
  <main bind:this={homeNode}>
    <div
      on:wheel|nonpassive={(e) => {
        if (isDesktop)
          instructionsMap.then((value) => mapDriver.wheel(e, value));
      }}
      class="home-wrapper"
      id={visibleSections[0]}
    >
      <svelte:component this={navbarType} />
      <Home />
    </div>

    <div
      on:wheel|nonpassive={(e) => {
        if (isDesktop)
          instructionsMap.then((value) => mapDriver.wheel(e, value));
      }}
      id="section-container"
      class="section-wrapper"
      bind:this={sectionsNode}
    >
      {#if windowsWidth > $maxWidthTablet}
        <div class="secnavbar-wrapper">
          <NavbarSec />
        </div>
      {/if}
      <svelte:component this={componentSections} />
    </div>
  </main>
  <Footer />
</div>
