<script>
  import Navbar from "../Component/NavBar.svelte";
  import TitleSubtitle from "../Component/TitleSubtitle.svelte";
  import { createEventDispatcher } from "svelte";
  import { accordionData } from "../StaticStore";
  import Accordion from "../Component/Accordion.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import Textures from "../Component/Textures.svelte";
  import { navbarItems } from "../StaticStore";

  const dispatch = createEventDispatcher();
  let active = true;
  // INDEX OF SECTIONS AND POSITION
  let sectionMove = {
    home: function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    servicios: function () {
      window.scrollTo({ top: 1920, left: 0, behavior: "smooth" });
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
    if ((e.deltaY > 0) & active) {
      movement("servicios", 400);
    } else if ((e.deltaY < 0) & active) {
      movement("home", 400);
    }
  };

  window.addEventListener("wheel", wheelNextSection, { passive: false });
  //FUNCTION THAT SCROLLS WHEN A NAVBAR ITEM IS CLICKED

  const navbarNextSection = (e) => {
    if (e.detail === navbarItems[0]) {
      movement("servicios", 400);
      setTimeout(() => {
        dispatch("navbarClicked", e.detail);
      }, 600);
    } else {
      movement("servicios", 400);
      setTimeout(() => {
        dispatch("navbarClicked", e.detail);
      }, 600);
    }
  };
</script>

<style>
  .navbar {
    /* META MARGIN 95PX */
    margin-bottom: 3vw;
  }

  .wrapper {
    display: flex;
    height: 57.7rem;
  }
  .col-1 {
    display: flex;
    flex-direction: column;
    position: relative;
    /*  meta margin 210 px */
    margin-left: calc(7vw);
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
  <Navbar on:itemLink={navbarNextSection} />
</div>
<div class="wrapper">
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
        <div class="button-contact">Contacto</div>
      </Button>
    </div>
  </div>
  <div class="col-2">
    <img src="./images/laptop.svg" alt="Laptop with code on the screen" />
  </div>
</div>
