<script>
  import { onMount } from "svelte";
  import Navbar from "../Component/NavBar.svelte";
  import TitleSubtitle from "../Component/TitleSubtitle.svelte";
  import { createEventDispatcher } from "svelte";
  import { accordionData } from "../StaticStore";
  import Accordion from "../Component/Accordion.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import Textures from "../Component/Textures.svelte";
  import { navbarItems, secNavbarItems } from "../StaticStore";

  const dispatch = createEventDispatcher();

  let active = true;
  let wrapper;

  // onMount(() => {
  //   wrapper.addEventListener("wheel", movement);
  //   console.log(wrapper);
  // });
  // //movement that creates the scroll movement

  // const movement = (e) => {
  //   e.preventDefault();
  //   let targetWheel = e.currentTarget.getAttribute("class");
  //   console.log(targetWheel);
  //   scrollTo(0, 1920);
  // };

  // INDEX OF SECTIONS AND POSITION
  let sectionMove = {
    toHome: function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    servicios: function () {
      window.scrollTo({
        top: window.innerHeight * 1.1526,
        left: 0,
        behavior: "smooth",
      });
    },
  };
  // FUNCTION THAT SCROLLS UP TO CERTAIN SECTION DURING A CERTAIN TIME
  function movement(section, time) {
    active = false;
    sectionMove[section]();
    setTimeout(() => {
      active = true;
    }, time);
  }
  // FUNCTION THAT CALL THE SCROLLS ON WHEEL EVENT
  const wheelNextSection = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && active) {
      movement("servicios", 400);
    } else if (e.deltaY < 0 && active) {
      movement("toHome", 400);
    }
  };

  window.addEventListener("wheel", wheelNextSection, { passive: false });

  //FUNCTION THAT SCROLLS WHEN A NAVBAR ITEM IS CLICKED

  const contactButton = (info) => {
    console.log(info);
    movement("servicios", 400);
    setTimeout(() => {
      dispatch("navbarClicked", info);
    }, 600);
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
    top: 90%;
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
    margin-top: 2rem;
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
    <div
      on:click={() => {
        contactButton(`${secNavbarItems[2]}`);
      }}
      class="button"
    >
      <Button>
        <div class="button-contact">{secNavbarItems[2]}</div>
      </Button>
    </div>
  </div>
  <div class="col-2">
    <img src="./images/laptop.svg" alt="Laptop with code on the screen" />
  </div>
</div>
