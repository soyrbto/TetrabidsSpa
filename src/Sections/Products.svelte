<script>
  import { onMount } from "svelte";
  import Card from "../Component/SharedComponents/Card.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import { colorButtonStore } from "../Stores";
  import { servicesData, productsData } from "../StaticStore";
  let bodyContent = productsData.productItems[0];
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
    display: flex;
    justify-content: space-between;
    //META PADDING 96px 70px 85px 70px
    padding: 2.5vw 3.6vw 3vw 3.6vw;
    //  META WIDTH 1511PX
    width: 78.65vw;

    .col-1 {
      display: flex;
      flex-direction: column;
      // META WIDTH 358px
      width: 18.65vw;

      .concept {
        .title {
          font-family: var(--display-typo);
          font-size: 32px;
        }

        .abstract {
          display: block;
          font-weight: 400;
          margin: 28px 0 50px 0;
          font-family: var(--par-typo);
          /* meta font size 14px */
          font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
        }
      }

      .wrapper-button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;
        width: 100%;

        .button-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20.5vw;
    }

    .col-3 {
      width: 25.3vw;

      .description-card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2.7rem 2.5rem calc(1.22vw + 0.35rem) 2.5rem;
        position: relative;

        .typo-title {
          color: #066d92;
        }
        .service-body {
          line-height: 175%;
          letter-spacing: 0.08em;
          font-weight: 400;
          font-family: var(--par-typo);
          /* meta font size 14px */
          font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
        }

        .meeting {
          display: block;
          margin: 0 auto;
          height: 11.45vw;
        }

        .button-wrapper {
          display: flex;
          justify-content: center;
          position: absolute;
          width: 12.8vw;
          align-self: center;
          top: 96%;

          .button-card-content {
            display: flex;
            align-items: center;
            justify-content: center;
            //META height 58px
            height: 3vw;
          }
        }
      }
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
        class="center-image"
      />
    </div>
    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->
    <div class="col-3">
      <Card>
        <div class="description-card-content">
          <h3 class="typo-title">{bodyContent}</h3>
          <p class="service-body">
            {@html productsData[bodyContent]}
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
