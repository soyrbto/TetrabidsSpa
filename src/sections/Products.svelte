<script>
  import { onMount } from "svelte";
  import Card from "../components/shared/Card.svelte";
  import Button from "../components/shared/Button.svelte";
  import DescriptionCard from "../components/DescriptionCard.svelte";
  import { colorButtonStore, maxWidthTablet, prodBodyContent } from "../Stores";
  import { productsData } from "../StaticStore";
  import Carousel from "@beyonk/svelte-carousel";

  let buttonColor = {};
  let windowsWidth;

  // WHEN MOUNTED
  onMount(() => {
    // FILLS 'buttonColor' OBJECT WITH A PROPERTY FOR EACH SERVICEITEM WITH THE DEFAULT "BLUE" PROPERTY
    productsData.productItems.forEach((elt) => {
      buttonColor[elt] = "blue";
    });
    // UPDATES THE STORE BUT THE FIRST ITEM IS REPLACED WITH WHITE
    colorButtonStore.set({ ...buttonColor, Wordpress: "white" });
  });
  // WHEN CLICK AN ITEM TAKES THE CLICKED TARGET
  const getContent = (e) => {
    prodBodyContent.set(e.target.innerText);
    //SET THE STORE TO ALL ELEMENTS BLUE
    colorButtonStore.set({ ...buttonColor });
    // SET THE ELEMENT CLICKED COLOR TO WHITE
    colorButtonStore.update(
      (value) => (value = { ...value, [$prodBodyContent]: "white" })
    );
  };
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    justify-content: space-between;

    //META PADDING 96px 70px 85px 70px
    padding: 5%;
    //  META WIDTH 1511PX
    width: 78.65vw;
    height: 71.4vh;

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      // META WIDTH 358px
      width: 18.65vw;

      .concept {
        .title {
          font-family: var(--display-typo);
          // META 32px
          font-size: clamp(23px, 1.66vw, 43px);
        }

        .abstract {
          display: block;
          font-weight: 400;
          margin-top: 28px;
          font-family: var(--par-typo);
          /* meta font size 14px */
          font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
          line-height: clamp(23px, 1.66vw, 43px);
        }
      }

      .wrapper-button {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 50%;
        width: 100%;

        .button-item {
          display: flex;
          justify-content: center;
          align-items: center;
          // META 60px
          height: clamp(42px, 3.125vw, 80px);
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20.5vw;
    }
  }

  @media screen and (max-width: 1280px) {
    .col-1 {
      // align-items: center;
      width: 100% !important;
    }

    .wrapper-section {
      width: 100vw;
      height: 100vh;
      background-image: url(../images/background-product-mob.svg);
      background-size: cover;
      background-position: center;
    }

    .title {
      text-align: center;
      font-size: clamp(23px, 4.7vw, 32px) !important;
    }

    .abstract {
      text-align: center;
      margin-top: 0 !important;
      font-size: clamp(11px, 1.95vw, 15px) !important;
    }
  }

  .description-card-container {
    display: flex;
    width: 280vw;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<!--  SERVICES SECTION -->
<Card
  borderRadius={windowsWidth < maxWidthTablet ? '0px' : '20px'}
  boxShadow={windowsWidth < maxWidthTablet ? 'none' : '9px 12px 31px rgba(0, 0, 0, 0.5)'}
>
  <div class="wrapper-section">
    <!--  SERVICE ABSTRACT SUB-SECTION -->
    <div class="col-1">
      <div class="concept">
        <h2 class="title">{productsData.title}</h2>
        <p class="abstract">{productsData.abstract}</p>
      </div>

      {#if windowsWidth > maxWidthTablet}
        <div class="wrapper-button">
          {#each productsData.productItems as serviceItem}
            <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
              <div class="button-item" on:click={getContent}>{serviceItem}</div>
            </Button>
          {/each}
        </div>
      {/if}

      <!-- THIS IS RENDERED WHEN SCREEN IS SMALLER THAN 1280PX -->
      {#if windowsWidth <= maxWidthTablet}
        <div class="description-card-container">
          <Carousel perPage={1}>
            {#each productsData.productItems as product}
              <div class="slide-content">
                <DescriptionCard>
                  <div class="title" slot="title">
                    {@html product}
                  </div>
                  <div class="body" slot="body">
                    {@html productsData[product]}
                  </div>
                </DescriptionCard>
              </div>
            {/each}
          </Carousel>
        </div>
      {/if}
    </div>

    <!--  SERVICE CENTER IMAGE SUB-SECTION -->
    {#if windowsWidth > maxWidthTablet}
      <div class="col-2">
        <img
          src="./images/tecnologias.svg"
          alt="3 workers behind a desk waving at you"
          class="center-image fade-in-bck"
        />
      </div>
    {/if}
    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->

    {#if windowsWidth > maxWidthTablet}
      <DescriptionCard>
        <div class="title" slot="title">{$prodBodyContent}</div>
        <div class="body" slot="body">
          {@html productsData[$prodBodyContent]}
        </div>
      </DescriptionCard>
    {/if}
  </div>
</Card>
