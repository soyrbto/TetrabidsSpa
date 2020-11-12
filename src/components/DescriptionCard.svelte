<script>
  import Button from "./shared/Button.svelte";
  import Card from "./shared/Card.svelte";
  import { servicesData } from "../StaticStore";
  import { servBodyContent, maxWidthTablet } from "../Stores";

  let windowsWidth;
</script>

<style type="text/scss">
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
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="col-3">
  <Card>
    <div class="description-card-content">
      <div class="wrapper-text-descripction">
        <h3 class="typo-title">
          <slot name="title">there is no service-title</slot>
        </h3>
        <p class="service-body">
          <slot name="body">there is no service-body</slot>
        </p>
      </div>
      <img src="./images/meeting.png" alt="" class="meeting fade-in-bck" />
      <div class="button-wrapper">
        <Button color="purple">
          <div class="button-card-content">Sigue Leyendo</div>
        </Button>
      </div>
    </div>
  </Card>
</div>
