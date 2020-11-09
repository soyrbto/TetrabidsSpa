<script>
  import { onMount } from "svelte";
  import Navbar from "../Component/NavBar.svelte";
  import TitleSubtitle from "../Component/TitleSubtitle.svelte";
  import Accordion from "../Component/Accordion.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import Textures from "../Component/Textures.svelte";
  import { accordionData, secNavbarItems } from "../StaticStore";

  let active = true;
  let wrapper;
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

  @media screen and (max-width: 768px) {
    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      justify-content: flex-start;
      padding-top: 8vh;
    }
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

  @media only screen and (max-width: 1000px) {
    .col-2 {
      display: none;
    }

    .wrapper {
      justify-content: center;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .button-contact {
    padding: 1.85vh 1.45vw;
    font-size: calc(0.65vw + 1.15vh);
  }

  @media screen and (max-width: 1000px) {
    .button-contact {
      padding: 1.85vh 3.45vw;
      font-size: calc(0.6vw + 2vh);
    }
  }

  .accordion {
    margin-top: 1.85vh;
  }
</style>

<Textures />
<div class="navbar">
  <Navbar />
</div>
<div class="wrapper" bind:this={wrapper}>
  <div class="col-1">
    <TitleSubtitle />
    <div class="accordion">
      {#each accordionData as accordion}
        <Accordion>
          <h3 slot="header">{accordion.title}</h3>
          <p slot="body">{accordion.body}</p>
        </Accordion>
      {/each}
    </div>
    <div class="button">
      <Button>
        <div class="button-contact">{secNavbarItems[2]}</div>
      </Button>
    </div>
  </div>
  <div class="col-2">
    <img src="./images/laptop.svg" alt="Laptop with code on the screen" />
  </div>
</div>
