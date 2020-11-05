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
    display: flex;
    justify-content: space-between;
    background-image: url(../images/services-background.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 70vw 1200px;
    border-radius: 20px;
    display: flex;
    padding: 9.6rem 7rem 8.5rem 7rem;
    //  META WIDTH 1511PX
    width: 78.65vw;
    height: 100%;

    @media only screen and (max-height: 845px) {
      & {
        padding-top: 3rem;
      }
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // META WIDTH 358PX
      width: 18.65vw;
      padding-bottom: 35px;

      .title {
        font-family: var(--display-typo);
        font-size: 32px;
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .buttons-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //Meta width 243px
        width: unquote($string: "clamp(150px, 12.65vw, 243px)");
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
      width: 25.31vw;
      @media only screen and (max-height: 845px) {
        & {
          padding-top: 3rem;
          height: 60.908vh;
        }
      }
    }
  }

  .description-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    //META padding bottom 47px
    padding: 2.7rem 2.5rem calc(1.22vw + 0.35rem) 2.5rem;
    position: relative;

    .meeting {
      display: block;
      margin: 0 auto;
      height: 11.45vw;
    }

    .service-body {
      margin-top: 1px;
      //META margin 29px
      margin-bottom: 1.51vw;
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
    top: 96%;

    .button-card-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24.6rem;
      height: 5.8rem;
    }
  }

  // .team-image {
  //   height: 15.625vw;
  // }
</style>

<!--  SERVICES SECTION -->
<Card>
  <div class="wrapper-section">
    <!--  SERVICE ABSTRACT SUB-SECTION -->
    <div class="col-1">
      <div class="concept">
        <h2 class="title">{servicesData.title}</h2>
        <p class="abstract typo-paragraph">{servicesData.abstract}</p>
      </div>

      <img
        src="./images/team.svg"
        alt="3 workers behind a desk waving at you"
        class="team-image"
      />
    </div>
    <!--  SERVICE ITEMS SUB-SECTION -->
    <div class="col-2">
      <div class="buttons-wrapper">
        {#each servicesData.serviceItems as serviceItem}
          <Button borderRadius="10px" color={$colorButtonStore[serviceItem]}>
            <div class="button-item" on:click={getContent}>{serviceItem}</div>
          </Button>
        {/each}
      </div>
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
