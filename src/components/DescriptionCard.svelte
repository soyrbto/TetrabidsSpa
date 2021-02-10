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
    width: clamp(345px, 25.31vw, 648px); // 486px

    @media (max-width: 1280px) {
      width: 100%;
      padding: 0 clamp(12px, calc(9.4vw - 60px), 60px); //SCREEN:1280 : 60PX - SCREEN:768 : 12PX
    }

    .description-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4% 5% 0 5%;
      position: relative;

      .typo-title {
        color: #066d92;
        font-size: clamp(18px, 1.3vw, 33px);
      }

      .service-body {
        font-family: "Josefin Sans", sans-serif;
        font-size: clamp(14px, 0.93vw, 25px); // 14px
        font-weight: 400;
        line-height: clamp(22px, 1.69vw, 32.5px);
        height: clamp(217px, 15.625vw, 400px); // 300px
        overflow: hidden;
        margin-top: 1.1vw; // 28px
      }

      .meeting {
        height: 11.66vw;
        margin-bottom: 10%;

        @media (max-width: 1280px) {
          height: 206px;
          margin-bottom: 25px;
        }
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
        align-self: center;
        position: absolute;
        top: 96%;

        .button-card-content {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: clamp(18px, 1.3vw, 33px); // 25px
          width: clamp(174px, 12.81vw, 328px); // 246px
          height: clamp(41px, 2.96vw, 77px); // 58px
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
      <img src="./images/page.svg" alt="" class="meeting fade-in-bck" />
      <div class="button-wrapper">
        <Button color="purple">
          <div class="button-card-content">Sigue Leyendo</div>
        </Button>
      </div>
    </div>
  </Card>
</div>
