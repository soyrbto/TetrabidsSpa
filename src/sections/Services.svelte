<script>
  import { onMount } from "svelte";
  import Card from "../components/shared/Card.svelte";
  import Button from "../components/shared/Button.svelte";
  import { colorButtonStore, maxWidthTablet } from "../Stores";
  import { servicesData } from "../StaticStore";

  let bodyContent = servicesData.serviceItems[0];
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

    .col-3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 25.31vw;

      .description-card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        //META padding bottom 47px
        //padding: 2.7rem 2.5rem calc(1.22vw + 0.35rem) 2.5rem;
        padding: 4% 5% 0 5%;
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
          //META height 300px
          height: 27.8vh;
          overflow: hidden;
          //meta margintop 28px
          margin-top: 1.1vw;
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
          align-self: center;
          top: 96%;

          .button-card-content {
            display: flex;
            align-items: center;
            justify-content: center;
            //Meta width 246px
            width: 12.81vw;
            //META height 58px
            height: 3vw;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .col-1 {
      display: flex;
      align-items: center;
      width: 100% !important;
    }

    // .wrapper-section {
    //   width: 100vw;
    //   padding: 5% !important;
    // }

    // .concept {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    // }

    // .description-card-content {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   padding: 5% 5% 0 5%;
    // }

    // .wrapper-text-descripction {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    // }

    // .abstract {
    //   margin-top: 0px !important;
    // }
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
        <Card>
          <div class="description-card-content">
            <div class="wrapper-text-descripction">
              <h3 class="typo-title">{bodyContent}</h3>
              <p class="service-body">
                {@html servicesData[bodyContent]}
              </p>
            </div>
            <img
              src="./images/meeting.png"
              alt=""
              class="meeting fade-in-bck"
            />
            <div class="button-wrapper">
              <Button color="purple">
                <div class="button-card-content">Sigue Leyendo</div>
              </Button>
            </div>
          </div>
        </Card>
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

    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->
    {#if windowsWidth > maxWidthTablet}
      <div class="col-3">
        <Card>
          <div class="description-card-content">
            <div class="wrapper-text-descripction">
              <h3 class="typo-title">{bodyContent}</h3>
              <p class="service-body">
                {@html servicesData[bodyContent]}
              </p>
            </div>
            <img
              src="./images/meeting.png"
              alt=""
              class="meeting fade-in-bck"
            />
            <div class="button-wrapper">
              <Button color="purple">
                <div class="button-card-content">Sigue Leyendo</div>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    {/if}
  </div>
</Card>
