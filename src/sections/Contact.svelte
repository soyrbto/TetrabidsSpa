<script>
  import Card from "../components/Card.svelte";
  import { contactData } from "../StaticStore";
  import Form from "../components/Form.svelte";
  import { maxWidthTablet, animationRange } from "../Stores";

  let windowsWidth;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .section-container {
    @include card-dim-desk;

    @include respond(tab-land) {
      @include sec-mob;
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @include respond(tab-land) {
        justify-content: center;
        width: 100%;
      }

      .concept {
        @include respond(tab-land) {
          text-align: center;
          margin-bottom: 50px;
        }

        .title {
          font-size: $font-size-titleSec-desk;
          line-height: clamp(33px, 2.08vw, 50px);
          letter-spacing: 0.05em;
          color: white;
          width: 25.7vw;

          @include respond(tab-land) {
            font-size: $font-size-titleSec-Mob;
            width: 100%;
          }
        }

        .subtitle {
          font-size: $font-size-subtitle-desk;
          color: white;
          margin-top: clamp(6px, 0.36vw, 8px);

          @include respond(tab-land) {
            text-align: center;
            font-size: $font-size-subtitle-mob;
          }
        }
      }

      .main-image {
        width: 26vw;
      }

      .wrapper-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: clamp(53px, 3.85vw, 99px);
        color: white;
        font-size: $font-size-subtitle-desk;
        font-weight: 600;

        @include respond(tab-land) {
          margin-top: 60px;
          font-size: $font-size-subtitle-mob;
        }
      }
    }

    .col-2 {
      @include flex-col-center;
      width: 37vw;
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />
<Card
  animateFly={animationRange}
  backgroundColor={"#0B5771"}
  borderRadius={windowsWidth > $maxWidthTablet ? "20px" : "0px 0px 8px 8px"}
  boxShadow={windowsWidth < $maxWidthTablet
    ? "none"
    : "9px 12px 31px rgba(0, 0, 0, 0.5)"}
>
  <div class="section-container">
    <div class="col-1">
      <div class="concept">
        <div class="title">{contactData.title}</div>
        {#if windowsWidth > 700}
          <div class="subtitle">{contactData.subtitle}</div>
        {/if}
      </div>
      {#if windowsWidth > $maxWidthTablet}
        <img src="./images/contact.svg" alt="" class="main-image fade-in-bck" />
      {/if}

      <!-- FORM COMPONENT -->

      {#if windowsWidth <= $maxWidthTablet}
        <Form />
      {/if}

      {#if windowsWidth > 700}
        <div class="wrapper-info">
          <div class="email">{contactData.email}</div>
          <div class="location-text">{contactData.location}</div>
        </div>
      {/if}
    </div>

    {#if windowsWidth > $maxWidthTablet}
      <div class="col-2">
        <Form />
      </div>
    {/if}
  </div>
</Card>
