<script>
  import { onMount } from "svelte";
  import Card from "../components/shared/Card.svelte";
  import Button from "../components/shared/Button.svelte";
  import DescriptionCard from "../components/DescriptionCard.svelte";
  import { colorButtonStore, prodBodyContent } from "../Stores";
  import { productsData } from "../StaticStore";
  let buttonColor = {};

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
    padding: 5% 2% 5% 5%;
    //  META WIDTH 1511PX
    width: 78.65vw;
    height: 71.4vh;

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // META WIDTH 358px
      width: 18.65vw;

      .concept {
        .title {
          font-family: var(--display-typo);
          font-size: 3vh;
        }

        .abstract {
          display: block;
          font-weight: 400;
          margin: 28px 0 0 0;
          font-family: var(--par-typo);
          /* meta font size 14px */
          font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
          line-height: 3vh;
        }
      }

      .wrapper-button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;
        width: 100%;
        padding-bottom: 20%;

        .button-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 5.55vh;
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
</style>

<!--  SERVICES SECTION -->
<Card>
  <div class="wrapper-section">
    <!--  SERVICE ABSTRACT SUB-SECTION -->
    <div class="col-1">
      <div class="concept">
        <h2 class="title">{productsData.title}</h2>
        <p class="abstract">{productsData.abstract}</p>
      </div>

      <div class="wrapper-button">
        {#each productsData.productItems as serviceItem}
          <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
            <div class="button-item" on:click={getContent}>{serviceItem}</div>
          </Button>
        {/each}
      </div>
    </div>
    <!--  SERVICE CENTER IMAGE SUB-SECTION -->
    <div class="col-2">
      <img
        src="./images/tecnologias.svg"
        alt="3 workers behind a desk waving at you"
        class="center-image fade-in-bck"
      />
    </div>
    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->

    <DescriptionCard>
      <div class="title" slot="title">{$prodBodyContent}</div>
      <div class="body" slot="body">
        {@html productsData[$prodBodyContent]}
      </div>
    </DescriptionCard>
  </div>
</Card>
