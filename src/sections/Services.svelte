<script>
  import { onMount } from "svelte";
  import ServiceDescription from "../components/DescriptionCard.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import {
    colorButtonStore,
    maxWidthTablet,
    servBodyContent,
    shortener,
  } from "../Stores";
  import { servicesData } from "../StaticStore";

  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Pagination } from "swiper";

  import "swiper/swiper.scss";
  import "swiper/components/pagination/pagination.scss";

  SwiperCore.use([Pagination]);

  let buttonColor = {};
  let windowsWidth;

  // WHEN MOUNTED
  onMount(() => {
    // FILLS 'buttonColor' OBJECT WITH A PROPERTY FOR EACH SERVICEITEM WITH THE DEFAULT "BLUE" PROPERTY
    servicesData.serviceItems.forEach((elt) => {
      buttonColor[elt] = "blue";
    });
    // UPDATES THE STORE BUT THE FIRST ITEM IS REPLACED WITH WHITE
    colorButtonStore.set({ ...buttonColor, [$servBodyContent]: "white" });
  });
  // WHEN CLICK AN ITEM TAKES THE CLICKED TARGET
  const getContent = (e) => {
    servBodyContent.set(e.target.innerText);
    //SET THE STORE TO ALL ELEMENTS BLUE
    colorButtonStore.set({ ...buttonColor });
    // SET THE ELEMENT CLICKED COLOR TO WHITE
    colorButtonStore.update(
      (buttonColor) =>
        (buttonColor = { ...buttonColor, [$servBodyContent]: "white" })
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
    padding: 3% 4.5%;
    //  META WIDTH 1511PX
    width: 78.65vw;
    // height: 71.4vh;
    height: clamp(450px, 40.15vw, 1025px);

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
          font-size: clamp(23px, 1.66vw, 43px);
        }

        .abstract {
          font-weight: 400;
          margin-top: 28px;
          font-family: "Josefin Sans", sans-serif;
          /* meta font size 14px */
          // font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
          font-size: clamp(14px, 0.93vw, 25px);
          line-height: clamp(22px, 1.69vw, 32.5px);
          text-align: justify;
        }
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: unquote($string: "clamp(150px, 12.65vw, 350px)");

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
      width: 100% !important;
    }

    .wrapper-section {
      width: 100vw;
      height: 800px;
      border-radius: 0;
      background-image: url(../images/background-service-mob.svg);
      background-size: cover;
      background-position: center;
    }

    .title {
      text-align: center;
      font-size: clamp(23px, 4vw, 32px) !important;
    }

    .abstract {
      text-align: center;
      margin-top: 0 !important;
      font-size: clamp(11px, 1.95vw, 15px) !important;
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<!--  SERVICES SECTION -->
<Card
  borderRadius={windowsWidth < maxWidthTablet ? "0px" : "20px"}
  boxShadow={windowsWidth < maxWidthTablet
    ? "none"
    : "9px 12px 31px rgba(0, 0, 0, 0.5)"}
>
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

      <!-- THIS IS RENDERED WHEN SCREEN IS SMALLER THAN 1280PX -->
      {#if windowsWidth <= maxWidthTablet}
        <div class="description-card-container">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={10}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            style={"overflow:visible; position:initial"}
          >
            {#each servicesData.serviceItems as service}
              <SwiperSlide>
                <ServiceDescription>
                  <div class="title" slot="title">
                    {@html service}
                  </div>
                  <div class="body" slot="body">
                    {@html servicesData[service]}
                  </div>
                </ServiceDescription>
              </SwiperSlide>
            {/each}
          </Swiper>
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
      <ServiceDescription>
        <div class="title" slot="title">{$servBodyContent}</div>
        <div class="body" slot="body">
          {@html shortener(servicesData[$servBodyContent], 280)}
        </div>
      </ServiceDescription>
    {/if}
  </div>
</Card>
