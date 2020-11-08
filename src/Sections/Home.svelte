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
    /* META MARGIN 95PX */
    margin-bottom: 3vw;
  }

  @media only screen and (max-height: 845px) {
    .navbar {
      margin-bottom: 0;
    }
  }
  .wrapper {
    display: flex;
    /* Meta HEIGHT 577PX */
    height: vh;
  }
  .col-1 {
    display: flex;
    flex-direction: column;
    position: relative;
    /*  meta margin 210 px */
    margin-left: calc(9vw - 45px);
  }
  .col-2 {
    display: flex;
    /*  15.625 is the meta measure */
    margin-left: calc(26.83vw - 20rem);
    z-index: 1;
    align-items: center;
  }

  img {
    /* meta width 587px */
    width: calc(18vw + 24rem);
    padding-top: 2.5vw;
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
    /*  meta width 150px */
    width: calc(0.5vw + 13rem);
    display: flex;
    justify-content: center;
    position: absolute;
    /* meta top 580px */
    top: calc(8vw + 44rem);
    align-self: center;
  }

  @media screen and (max-height: 845px) {
    .button {
      /* META top 475px */
      top: calc(39.7vh + 20rem);
    }
  }

  .accordion {
    margin-top: 2rem;
  }
  .button-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
  }

  p {
    height: 90px;
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
