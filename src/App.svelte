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
    easeInOutCubic,
    linear,
  } from "./Stores";

  let windowsWidth;

  const sectionDriver = (e) => {
    e.preventDefault();

    let target = e.currentTarget.getAttribute("id");

    //consigo quien es mi target
    if (windowsWidth > 980) {
      // console.log("la pantalla es mayor a 980");
      target == "section-container"
        ? (target = $displayedSection)
        : (target = target);
      // console.log(`${target} es el target que sale de pantalla mayor a 980`);
    }
    //consigo el indice de mi target
    let currentIndex = visibleSections.findIndex((elmnt) => elmnt == target);
    // console.log(currentIndex);

    let nextIndex;
    let nextPosition;

    //consigo quien el next target
    if (windowsWidth > 980 && target != visibleSections[0]) {
      //si esta en el arreglo suma o resta
      e.deltaY > 0
        ? (nextIndex = currentIndex + 1)
        : (nextIndex = currentIndex - 1);
      if (nextIndex >= 3) {
        nextIndex = 3;
      }
      if (nextIndex <= 0) {
        nextIndex = 1;
        let start = null;
        const duration = 50;
        const startPosition = window.pageYOffset;
        const targetPosition = 0;
        const distance = targetPosition - startPosition;

        window.requestAnimationFrame(step);
        function step(timestamp) {
          if (!start) {
            console.log(start);
            start = timestamp;
            console.log(start);
          }
          const progress = timestamp - start;
          // console.log(`${timestamp}  ${progress}`);

          window.scrollTo(
            0,
            easeInOutCubic(progress, startPosition, distance, duration)
          );
          if (progress < duration) window.requestAnimationFrame(step);
        }
      }

      changeSection(visibleSections[nextIndex]);
    } else {
      nextPosition = document.querySelector("#section-container");
      console.log(
        `pantalla mayor a 980 y seccion visible es home proxima  seccion es ${nextPosition}`
      );
    }

    let currentPosition = document.querySelector(
      `#${visibleSections[currentIndex]}`
      //aqui debo colocar la funcion que baja a la seccion
    );
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
