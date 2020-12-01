<script>
  import Navbar from "../components/NavbarDesktop.svelte";
  import TitleSubtitle from "../components/TitleSubtitle.svelte";
  import Accordion from "../components/Accordion.svelte";
  import Button from "../components/shared/Butto.svelte";
  import Textures from "../components/Textures.svelte";
  import {
    screenDisplacer,
    changeSection,
    maxWidthTablet,
    nodeSections,
  } from "../Stores";
  import { accordionData, secNavbarItems } from "../StaticStore";

  let windowsWidth;
  let ContactButton;

  const contactMove = (e) => {
    if (windowsWidth > maxWidthTablet) {
      let target = e.currentTarget.innerText;

      let targetPosition = document.querySelector("#section-container")
        .offsetTop;
      screenDisplacer(0, targetPosition, 750);
      setTimeout(() => changeSection(target), 400);
    } else {
      let target = $nodeSections[2].offsetTop;
      let startPos = ContactButton.offsetTop;

      screenDisplacer(startPos, target, 800);
    }
  };
</script>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    height: 11.57vh;
  }

  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 88.43vh;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100%;
  }

  .title-accordion {
    /** META 22px */
    font-size: clamp(clamp(12px, 0.25vw + 1.2rem, 16px), 1.14vw, 30px);
    line-height: 0;
  }

  .col-2 {
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 1;
  }

  img {
    /* meta width 565px */
    width: 29.5vw;
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      height: 800px !important;
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: clamp(160px, 22vw, 424px);
      /* height: auto; */
    }
  }

  @media only screen and (max-width: 1280px) {
    .wrapper {
      justify-content: center;
      height: 680px;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .button-contact {
    padding: clamp(15px, 1.04vw, 23px) clamp(26px, 1.45vw, 37px);
    /* META 25px */
    font-size: clamp(15px, 1.3vw, 29px);
  }

  .accordion {
    margin-top: clamp(19px, 1.04vw, 27px);
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<Textures />
{#if windowsWidth > 768}
  <div class="navbar">
    <Navbar />
  </div>
{/if}

<div class="wrapper">
  <div class="col-1">
    <TitleSubtitle />
    <div class="accordion">
      {#each accordionData as accordion}
        <Accordion>
          <h3 class="title-accordion" slot="header">{accordion.title}</h3>
          <p slot="body">{accordion.body}</p>
        </Accordion>
      {/each}
    </div>
    <div on:click={contactMove} class="button" bind:this={ContactButton}>
      <Button>
        <div class="button-contact">{secNavbarItems[2]}</div>
      </Button>
    </div>
  </div>

  {#if windowsWidth > maxWidthTablet}
    <div class="col-2">
      <img
        class="slide-in-right"
        src="./images/laptop.svg"
        alt="Laptop with code on the screen"
      />
    </div>
  {/if}
</div>
