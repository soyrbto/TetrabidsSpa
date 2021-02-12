<script>
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  let windowsWidth;
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
      position: relative;

      .typo-title {
        color: $color-text-blue;
        font-size: $font-size-primary;

        @include respond(tab-land) {
          text-align: center;
        }
      }

      .service-body {
        font-family: $font-primary;
        font-size: $font-size-body;
        font-weight: 400;
        line-height: $line-height;
        height: clamp(217px, 15.625vw, 400px); // 300px
        overflow: hidden;
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

        .button-card-content {
          padding: clamp(10px, 0.78vw, 17px) clamp(28px, 2.08vw, 40px);
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
