<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import DescriptionCard from "../components/DescriptionCard.svelte";
  import { maxWidthTablet, animationRange } from "../Stores";
  import { productsData, products } from "../StaticStore";
  import { dynaListHandler, textShortener } from "../functions";
  import Slidy from "../slidy/Slidy.svelte";

  let dynaList = productsData.items;
  let dynaObjectState;
  let windowsWidth;
  let activeItem;
  let id;

  const local = products;
  console.log(local);

  onMount(() => {
    dynaObjectState = dynaListHandler.createObjectStates(dynaList, "blue");
    id = dynaListHandler.id;
    activeItem = dynaListHandler.updateState(dynaList[0], "white");
  });

  const updateState = (e) => {
    activeItem = e.target.innerText;
    dynaListHandler.updateState(activeItem, "white");
  };

  $: slidy_cards = {
    slides: local,
    wrap: {
      id: "slidy_default", // customize this instance Slidy by #id
      width: "100%",
      height: "100%",
      padding: "0",
      align: "middle",
      alignmargin: 50,
    },
    slide: {
      gap: 50,
      class: "", // classname for styling slide
      width: "50%",
      height: "100%",
      backimg: true, // if true image on background slidewrap & slot for content empty
      imgsrckey: "src", // prop for ypurs image src key
      objectfit: "cover", // new in 2.3.0
      overflow: "hidden", // new in 2.4.1
    },
    controls: {
      dots: true,
      dotsnum: false,
      dotsarrow: false,
      dotspure: true, // dotnav like realy dots :)
      arrows: false,
      keys: false, // nav by arrow keys
      drag: true, // nav by mousedrag
      wheel: false, // nav by mousewheel (shift + wheel) or swipe on touch/trackpads
    },
    options: {
      axis: "x", // new in 2.2.0 axis direction
      loop: false, // new in 2.3.0 loop/no options
      duration: 550, // duration slides animation
    },
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .wrapper-section {
    @include card-dim-desk;

    @include respond(tab-land) {
      @include sec-mob;
      background-image: url(../images/background-product-mob.svg);
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

          @include respond(phone) {
            min-height: 92px;
          }
        }
      }

      .wrapper-button {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 50%;
        width: 100%;

        .button-item {
          padding: $padding-button-Blue;
        }
      }
    }

    .col-2 {
      @include flex-col-center;
      width: 20.5vw;
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
        <h2 class="title">{productsData.title}</h2>
        <p class="abstract">{productsData.abstract}</p>
      </div>

      {#if windowsWidth > $maxWidthTablet}
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
      {#if windowsWidth <= $maxWidthTablet}
        <Slidy {...slidy_cards} let:item>
          <div class="slide">
            <!-- {#each productsData.items as product, i} -->
            <DescriptionCard
              imageUrl="product-{item.id}"
              imageAlt={`image-${item.header}`}
              idPost={item.id + 6}
              section="product"
            >
              <div slot="title">
                {@html item.header}
              </div>
              <div slot="body">
                {@html textShortener(item.abstract, 270)}
              </div>
            </DescriptionCard>
            <!-- {/each} -->
          </div>
        </Slidy>
      {/if}
    </div>

    <!--  SERVICE CENTER IMAGE SUB-SECTION -->
    {#if windowsWidth > $maxWidthTablet}
      <div class="col-2">
        <img
          src="./images/tecnologias.svg"
          alt="3 workers behind a desk waving at you"
          class="center-image fade-in-bck"
        />
      </div>
    {/if}
    <!--  SERVICES DESCRIPTIONS SUB-SECTION -->

    {#if windowsWidth > $maxWidthTablet}
      <DescriptionCard
        imageUrl="product-{id[activeItem]}"
        imageAlt={activeItem}
        idPost={id[activeItem] + 6}
        section="product"
      >
        <div slot="title">{activeItem}</div>
        <div slot="body">
          {@html textShortener(productsData[activeItem], 330)}
        </div>
      </DescriptionCard>
    {/if}
  </div>
</Card>
