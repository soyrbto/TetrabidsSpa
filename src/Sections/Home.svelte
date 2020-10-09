<script>
  import Navbar from "../Component/NavBar.svelte";
  import TitleSubtitle from "../Component/TitleSubtitle.svelte";
  import { accordionData } from "../StaticStore";
  import Accordion from "../Component/Accordion.svelte";
  import Button from "../Component/SharedComponents/button.svelte";

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
    if (e.detail === "Servicios") {
      movement("servicios", 400);
    }
  };
</script>

<style>
  .navbar {
    margin-bottom: 95px;
  }

  .wrapper {
    display: flex;
  }
  .col-1 {
    display: flex;

    flex-direction: column;
    position: relative;
    margin-left: 210px;
  }
  .col-2 {
    margin-left: 300px;
  }

  img {
    height: 587px;
    width: 587px;
  }
  .button {
    width: 150px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 580px;
    align-self: center;
  }

  .accordion {
    margin-top: 20px;
  }
  .button-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
</style>

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
