<script>
  import { onMount } from "svelte";
  import ServiceDescription from "../components/DescriptionCard.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import { maxWidthTablet, animationRange } from "../Stores";
  import { servicesData, services } from "../StaticStore";
  import { dynaListHandler, textShortener } from "../functions";
  import Slidy from "../slidy/Slidy.svelte";

  let dynaList = servicesData.items;
  let dynaObjectState;
  let windowsWidth;
  let activeItem;
  let id;

  const local = services;

  onMount(() => {
    dynaObjectState = dynaListHandler.createObjectStates(dynaList, "blue");
    activeItem = dynaListHandler.updateState(dynaList[0], "white");
    id = dynaListHandler.id;
  });

  const updateState = (e) => {
    activeItem = e.target.innerText;
    dynaListHandler.updateState(activeItem, "white");
  };

  $: slidy_cards = {
    slides: local,
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
      padding: 5% 0;
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
        margin-bottom: 20px;
        .title {
          font-size: $font-size-titleSec-desk; // 32px

          @include title-sec-mob;
        }

        .abstract {
          font-size: $font-size-body;
          line-height: $line-height;
          text-align: center;
          margin-top: 15px;

          @include respond(phone) {
            min-height: 92px;
            text-align: justify;
            padding: 0 5%;
          }
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
        <Slidy {...slidy_cards} let:item>
          <div class="slide">
            <ServiceDescription
              imageUrl="service-{item.id}"
              imageAlt={`image-${item.header}`}
              idPost={item.id}
              section="service"
            >
              <div slot="title">
                {@html item.header}
              </div>
              <div slot="body">
                {@html textShortener(item.abstract, 270)}
              </div>
            </ServiceDescription>
          </div>
        </Slidy>
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
      <ServiceDescription
        imageUrl="service-{id[activeItem]}"
        imageAlt={activeItem}
        idPost={id[activeItem]}
        section="service"
      >
        <div slot="title">{activeItem}</div>
        <div slot="body">
          {@html textShortener(servicesData[activeItem], 330)}
        </div>
      </ServiceDescription>
    {/if}
  </div>
</Card>
