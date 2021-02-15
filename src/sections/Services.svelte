<script>
  import { onMount } from "svelte";
  import ServiceDescription from "../components/DescriptionCard.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import { maxWidthTablet, animationRange } from "../Stores";
  import { servicesData } from "../StaticStore";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Pagination } from "swiper";
  import { dynaListHandler } from "../optimizedFunctions";

  SwiperCore.use([Pagination]);
  let dynaList = servicesData.items;
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
  @import "../stylesGlobal/vars";

  .wrapper-section {
    @include card-dim-desk;
    background-image: url(../images/services-background.svg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 70vw 1200px;
    border-radius: 20px;

    @include respond(tab-land) {
      @include sec-mob;
      background-image: url(../images/background-service-mob.svg);
      background-size: cover;
      background-position: center;
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 18.65vw; // 358px

      @include respond(tab-land) {
        width: 100%;
      }

      .concept {
        .title {
          font-size: $font-size-titleSec-desk; // 32px

          @include title-sec-mob;
        }

        .abstract {
          font-size: $font-size-body;
          line-height: $line-height;
          text-align: justify;
          margin-top: 15px;
        }
      }
    }

    .col-2 {
      @include flex-col-center;
      width: clamp(150px, 12.65vw, 350px);

      .buttons-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;
      }

      .button-item {
        padding: $padding-button-Blue;
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<!--  SERVICES SECTION -->
<Card
  animateFly={animationRange}
  borderRadius={windowsWidth <= $maxWidthTablet ? "0px" : "20px"}
  boxShadow={windowsWidth <= $maxWidthTablet
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
      {#if windowsWidth > $maxWidthTablet}
        <img
          class="fade-in-bck"
          src="./images/team.svg"
          alt="3 workers behind a desk waving at you"
        />
      {/if}

      <!-- THIS IS RENDERED WHEN SCREEN IS SMALLER THAN 1280PX -->
      {#if windowsWidth <= $maxWidthTablet}
        <div class="description-card-container">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={10}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            style={"overflow:visible; position:initial"}
          >
            {#each servicesData.items as service}
              <SwiperSlide>
                <ServiceDescription>
                  <div slot="title">
                    {@html service}
                  </div>
                  <div slot="body">
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
    {#if windowsWidth > $maxWidthTablet}
      <div class="col-2">
        <div class="buttons-wrapper">
          {#each dynaList as serviceItem}
            <Button borderRadius="10px" color={$dynaObjectState[serviceItem]}>
              <div class="button-item" on:click={updateState}>
                {serviceItem}
              </div>
            </Button>
          {/each}
        </div>
      </div>
    {/if}

    <!--  SERVICES DESCRIPTIONS SUB-SECTION FOR WHEN THE WIDTH IS BIGGER THAN 1280PX -->
    {#if windowsWidth > $maxWidthTablet}
      <ServiceDescription>
        <div class="title" slot="title">{activeItem}</div>
        <div class="body" slot="body">{@html servicesData[activeItem]}</div>
      </ServiceDescription>
    {/if}
  </div>
</Card>
