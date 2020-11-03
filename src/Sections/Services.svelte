<script>
  import { onMount } from "svelte";
  import SecNavbar from "./SecNavbar.svelte";
  import Card from "../Component/SharedComponents/Card.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import { colorButtonStore } from "../Stores";
  import { servicesData } from "../StaticStore";
  let bodyContent = servicesData.serviceItems[0];
  let buttonColor = {};

  // WHEN MOUNTED
  onMount(() => {
    // FILLS 'buttonColor' OBJECT WITH A PROPERTY FOR EACH SERVICEITEM WITH THE DEFAULT "BLUE" PROPERTY
    servicesData.serviceItems.forEach((elt) => {
      buttonColor[elt] = "blue";
    });
    // UPDATES THE STORE BUT THE FIRST ITEM IS REPLACED WITH WHITE
    colorButtonStore.set({ ...buttonColor, asesoria: "white" });
  });
  // WHEN CLICK AN ITEM TAKES THE CLICKED TARGET
  const getContent = (e) => {
    bodyContent = e.target.innerText;
    //SET THE STORE TO ALL ELEMENTS BLUE
    colorButtonStore.set({ ...buttonColor });
    // SET THE ELEMENT CLICKED COLOR TO WHITE
    colorButtonStore.update(
      (value) => (value = { ...value, [bodyContent]: "white" })
    );
  };
</script>

<style type="text/scss">
  .wrapper-section {
    background-image: url(../images/services-background.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 70vw 1200px;
    border-radius: 20px;
    display: flex;
    padding: 9.6rem 0 8.5rem 0;
    //  META WIDTH 1511PX
    width: 78.65vw;

    .col-1 {
      display: flex;
      flex-direction: column;
      margin-left: 7rem;
      width: 35.8rem;

      .abstract {
        display: block;
        margin-bottom: 5rem;
      }

      .title {
        font-family: var(--display-typo);
        font-size: 32px;
      }

      .team-image {
        align-self: center;
        justify-self: flex-end;
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 24.5rem;
      //META MARGING 208PX
      margin-left: calc(21.25vw - 20rem);
      height: 60.1rem;

      .button-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6rem;
      }
    }

    .col-3 {
      width: 48.6rem;
      margin: 0 7.2rem 0 6.6rem;
    }
  }

  .description-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.7rem 2.5rem 4.7rem 2.5rem;
    position: relative;

    .meeting {
      display: block;
      margin: 0 auto;
      height: 22rem;
    }

    .service-body {
      margin-top: 1px;
      margin-bottom: 2.9rem;
      font-size: 14px;
      height: 24rem;
      line-height: 175%;
      letter-spacing: 0.08em;
    }
  }

  .typo-title {
    color: #066d92;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 24.6rem;
    align-self: center;
    top: 57rem;

    .button-card-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24.6rem;
      height: 5.8rem;
    }
  }
</style>

<!--  SERVICES SECTION -->
<Card>
  <div class="wrapper-section">
    <!--  SERVICE ABSTRACT SUB-SECTION -->
    <div class="col-1">
      <h2 class="title">{servicesData.title}</h2>
      <p class="abstract typo-paragraph">{servicesData.abstract}</p>
      <img
        src="./images/team.svg"
        alt="3 workers behind a desk waving at you"
        class="team-image"
      />
    </div>
    <!--  SERVICE ITEMS SUB-SECTION -->
    <div class="col-2">
      {#each servicesData.serviceItems as serviceItem}
        <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
          <div class="button-item" on:click={getContent}>{serviceItem}</div>
        </Button>
      {/each}
    </div>
    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->
    <div class="col-3">
      <Card>
        <div class="description-card-content">
          <h3 class="typo-title">{bodyContent}</h3>
          <p class="service-body typo-paragraph">
            {@html servicesData[bodyContent]}
          </p>
          <img src="./images/meeting.png" alt="" class="meeting" />
          <div class="button-wrapper">
            <Button color="purple">
              <div class="button-card-content">Sigue Leyendo</div>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</Card>
