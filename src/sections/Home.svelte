<script>
  import Accordion from "../components/Accordion.svelte";
  import Button from "../components/Button.svelte";
  import Textures from "../components/Textures.svelte";
  import { instructionsMap, mapDriver, instructionsMapMob } from "../functions";
  import { maxWidthTablet, sectionItems } from "../Stores";
  import { accordionData } from "../StaticStore";

  let windowsWidth;

  const contactMove = (e) => {
    if (windowsWidth > $maxWidthTablet) {
      instructionsMap.then((value) => mapDriver.button(value, 3));
    } else {
      instructionsMapMob.then((value) => mapDriver.button(value, 2));
    }
  };
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 88.43vh;

    @include respond(tab-land) {
      height: 680px;
    }

    @include respond(tab-port) {
      height: 800px;
    }

    .col-1 {
      position: relative;

      @include respond(tab-port) {
        padding-top: 50px;
      }

      h1 {
        color: white;
        font-size: $font-size-logo;
        font-weight: 700;
        user-select: none;

        span {
          display: block;
          margin-top: clamp(-2.5rem, -1.3vw, -1.5rem); // 25px
          font-size: clamp(
            clamp(26px, calc(2vw + 16px), 32px),
            2.34vw,
            55px
          ); // 45px
          font-weight: 400;
        }
      }

      .accordion {
        margin-top: clamp(19px, 1.04vw, 27px);

        .title-accordion {
          font-size: clamp(
            clamp(12px, calc(0.25vw + 1.2rem), 16px),
            1.14vw,
            30px
          ); // 22px
          line-height: 0;
        }
      }

      & > .button {
        text-align: center;

        .button-contact {
          padding: clamp(15px, 0.9375vw, 18px) clamp(18px, 1.2vw, 23px);
        }
      }
    }
  }

  img {
    position: relative;
    width: 29.5vw; // 565px
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<Textures />
<div class="wrapper">
  <div class="col-1">
    <h1>Tetrabids <span> Desarrollo web contigo</span></h1>

    <div class="accordion">
      {#each accordionData as accordion}
        <Accordion>
          <h3 class="title-accordion" slot="title">{accordion.title}</h3>
          <p slot="body">{accordion.body}</p>
        </Accordion>
      {/each}
    </div>

    <div on:click={contactMove} class="button">
      <Button>
        <div class="button-contact">{$sectionItems.navbarSec[2]}</div>
      </Button>
    </div>
  </div>

  {#if windowsWidth > $maxWidthTablet}
    <div class="col-2">
      <img
        class="slide-in-right"
        src="./images/laptop.svg"
        alt="Laptop with code on the screen"
      />
    </div>
  {/if}
</div>
