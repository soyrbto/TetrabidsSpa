<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import DescriptionCard from "../components/DescriptionCard.svelte";
  import { maxWidthTablet } from "../Stores";
  import { productsData } from "../StaticStore";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Pagination } from "swiper";
  import { dynaListHandler } from "../optimizedFunctions";

  SwiperCore.use([Pagination]);
  let dynaList = productsData.items;
  let dynaObjectState;
  let windowsWidth;
  let activeItem;

  onMount(() => {
    dynaObjectState = dynaListHandler.createObjectStates(dynaList, "blue");
    activeItem = dynaListHandler.updateState(dynaList[0], "white");
  });

  const updateState = (e) => {
    activeItem = e.target.innerText;
    dynaListHandler.updateState(activeItem, "white");
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
    // height: 71.4vh;
    height: clamp(450px, 40.15vw, 1025px);

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
          font-family: "Josefin Sans", sans-serif;
          /* meta font size 14px */
          // font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
          font-size: clamp(14px, 0.93vw, 25px);
          line-height: clamp(23px, 1.66vw, 43px);
          text-align: justify;
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
          font-size: 1.3vw;
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
      height: 800px;
      background-image: url(../images/background-product-mob.svg);
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
        <h2 class="title">{productsData.title}</h2>
        <p class="abstract">{productsData.abstract}</p>
      </div>

      {#if windowsWidth > maxWidthTablet}
        <div class="wrapper-button">
          {#each dynaList as item}
            <Button borderRadius="10px" color={$dynaObjectState[item]}>
              <div class="button-item" on:click={updateState}>
                {item}
              </div>
            </Button>
          {/each}
        </div>
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
            {#each productsData.items as product}
              <SwiperSlide>
                <DescriptionCard>
                  <div class="title" slot="title">
                    {@html product}
                  </div>
                  <div class="body" slot="body">
                    {@html productsData[product]}
                  </div>
                </DescriptionCard>
              </SwiperSlide>
            {/each}
          </Swiper>
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
        <div class="title" slot="title">{activeItem}</div>
        <div class="body" slot="body">{productsData[activeItem]}</div>
      </DescriptionCard>
    {/if}
  </div>
</Card>
