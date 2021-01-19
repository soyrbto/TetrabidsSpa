<script>
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  let windowsWidth;
</script>

<style type="text/scss">
  .col-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // META 486px
    width: clamp(345px, 25.31vw, 648px);

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
        font-size: clamp(18px, 1.3vw, 33px);
      }

      .service-body {
        // line-height: 175%;
        line-height: clamp(22px, 1.69vw, 32.5px);
        //letter-spacing: 0.08em;
        font-weight: 400;
        font-family: "Josefin Sans", sans-serif;
        /* meta font size 14px */
        // font-size: unquote($string: "clamp(11px, 0.6vw + 0.448rem, 20px)");
        font-size: clamp(14px, 0.93vw, 25px);
        //META height 300px
        height: clamp(217px, 15.625vw, 400px);
        overflow: hidden;
        //meta margintop 28px
        margin-top: 1.1vw;
      }

      .meeting {
        display: block;
        // width: 13.75vw;
        width: 15.75vw;
        align-self: center;
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
          // Meta 25px
          font-size: clamp(18px, 1.3vw, 33px);
          //Meta width 246px
          width: clamp(174px, 12.81vw, 328px);
          //META height 58px
          height: clamp(41px, 2.96vw, 77px);
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .service-body {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    .col-3 {
      width: 100%;
      padding: 0 3% !important;
    }
  }

  @media screen and (max-width: 1280px) {
    .col-3 {
      width: 100%;
      padding: 0 15%;
    }

    .service-body {
      height: 170px !important;
    }

    .meeting {
      height: 206px;
      width: clamp(270px, 40.36vw, 310px) !important;
      margin-bottom: 25px;
    }
  }

  @media screen and (min-width: 1281px) {
    .meeting {
      height: 11.66vw;
      margin-bottom: 10%;
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
      <img src="./images/page.svg" alt="" class="meeting fade-in-bck" />
      <div class="button-wrapper">
        <Button color="purple">
          <div class="button-card-content">Sigue Leyendo</div>
        </Button>
      </div>
    </div>
  </Card>
</div>
