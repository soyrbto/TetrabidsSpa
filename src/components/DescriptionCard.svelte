<script>
  import { fade } from "svelte/transition";
  import { maxWidthTablet } from "../Stores";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

  let windowsWidth;

  export let imageUrl;
  export let imageAlt;
  export let idPost;
  export let section;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .col-3 {
    @include flex-col-center;
    width: clamp(345px, 25.31vw, 648px); // 486px

    @include respond(tab-land) {
      width: 100%;
      padding: 0 clamp(12px, calc(9.4vw - 60px), 60px); //SCREEN:1280 : 60PX - SCREEN:768 : 12PX
    }

    .description-card-content {
      @include flex-col-center;
      padding: 4% 5% 0 5%;

      .typo-title {
        color: $color-text-blue;
        font-size: $font-size-primary;
      }

      .service-body {
        font-size: $font-size-body;
        line-height: $line-height;
        height: clamp(217px, 15.625vw, 400px); // 300px
        margin-top: clamp(10px, 1.1vw, 28px); // 28px
      }

      .meeting {
        height: 11.66vw;
        margin-bottom: 10%;

        @include respond(tab-land) {
          height: 206px;
          margin-bottom: 25px;
        }
      }

      .button-wrapper {
        display: flex;
        align-self: center;
        position: absolute;
        top: 96%;

        a {
          text-decoration: none;
          color: white;

          .button-card-content {
            padding: clamp(10px, 0.78vw, 17px) clamp(28px, 2.08vw, 40px);
          }
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="col-3">
  <Card
    boxShadow={windowsWidth <= 1280
      ? "0px 7px 10px rgba(0, 0, 0, 0.5)"
      : "9px 12px 31px rgba(0, 0, 0, 0.5)"}
  >
    <div class="description-card-content">
      <div class="wrapper-text-descripction">
        <h3 class="typo-title">
          <slot name="title">there is no service-title</slot>
        </h3>
        <p class="service-body">
          <slot name="body">there is no service-body</slot>
        </p>
      </div>
      {#key imageUrl}
        <img
          in:fade={{ delay: 250, duration: 300 }}
          src="./images/{imageUrl}.svg"
          alt={imageAlt}
          class="meeting fade-in-bck"
        />
      {/key}
      <div class="button-wrapper">
        <Button color="purple">
          <a href="/{section}/{idPost}">
            <div class="button-card-content">Sigue Leyendo</div>
          </a>
        </Button>
      </div>
    </div>
  </Card>
</div>
