<script>
  import { onMount } from "svelte";
  import ServiceDescription from "../components/DescriptionCard.svelte";
  import Card from "../components/shared/Card.svelte";
  import Button from "../components/shared/Button.svelte";
  import { colorButtonStore, maxWidthTablet, bodyContent } from "../Stores";
  import { servicesData } from "../StaticStore";

  let buttonColor = {};
  let windowsWidth;

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
    bodyContent.set(e.target.innerText);
    //SET THE STORE TO ALL ELEMENTS BLUE
    colorButtonStore.set({ ...buttonColor });
    // SET THE ELEMENT CLICKED COLOR TO WHITE
    colorButtonStore.update(
      (value) => (value = { ...value, [$bodyContent]: "white" })
    );
  };
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    justify-content: space-between;
    background-image: url(../images/services-background.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 70vw 1200px;
    border-radius: 20px;
    //META PADDING 96px 70px 85px 70px
    padding: 3% 4.5% 3% 4.5%;
    //  META WIDTH 1511PX
    width: 78.65vw;
    height: 71.4vh;

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      // META WIDTH 358PX
      width: 18.65vw;

      .concept {
        .title {
          font-family: var(--display-typo);
          //META font-size 32px
          font-size: 3vh;
        }

        .abstract {
          font-weight: 400;
          margin-top: 28px;
          font-family: var(--par-typo);
          /* meta font size 14px */
          font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
          line-height: clamp(22px, 1.69vw, 32.5px);
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: unquote($string: "clamp(150px, 12.65vw, 243px)");

      .buttons-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //Meta width 243px
        height: 100%;
        //META PADDING 75PX
        padding: unquote($string: "clamp(50px, 3.9vw, 40px)") 0;
      }

      .button-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3.125vw;
        font-size: 1.3vw;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .col-1 {
      display: flex;
      align-items: center;
      width: 100% !important;
    }
  }

  .description-card-container {
    display: flex;
    width: 500vw;
    justify-content: space-around;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<!--  SERVICES SECTION -->
<Card>
  <div class="wrapper-section">
    <!--  SERVICE ABSTRACT SUB-SECTION -->
    <div class="col-1">
      <div class="concept">
        <h2 class="title">{servicesData.title}</h2>
        <p class="abstract">{servicesData.abstract}</p>
      </div>
      {#if windowsWidth > maxWidthTablet}
        <img
          class="fade-in-bck"
          src="./images/team.svg"
          alt="3 workers behind a desk waving at you"
        />
      {/if}

      {#if windowsWidth <= maxWidthTablet}
        <div class="description-card-container">
          {#each servicesData.serviceItems as service}
            <ServiceDescription>
              <div class="title" slot="service-title">
                {@html service}
              </div>
              <div class="title" slot="service-body">
                {@html servicesData[service]}
              </div>
            </ServiceDescription>
          {/each}
        </div>
      {/if}
    </div>
    <!--  SERVICE ITEMS SUB-SECTION -->
    {#if windowsWidth > maxWidthTablet}
      <div class="col-2">
        <div class="buttons-wrapper">
          {#each servicesData.serviceItems as serviceItem}
            <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
              <div class="button-item" on:click={getContent}>{serviceItem}</div>
            </Button>
          {/each}
        </div>
      </div>
    {/if}

    <!--  SERVICES DESCRIPTIONS SUB-SECTION FOR WHEN THE WIDTH IS BIGGER THAN 1280PX -->
    {#if windowsWidth > maxWidthTablet}
      <ServiceDescription />
    {/if}
  </div>
</Card>
