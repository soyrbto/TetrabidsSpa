<script>
  import Card from "../components/shared/Card.svelte";
  import { contactData } from "../StaticStore";
  import Form from "../components/shared/Form.svelte";
  import { maxWidthTablet } from "../Stores";

  let windowsWidth;
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    justify-content: space-between;
    padding: 5%;
    width: 78.65vw;
    height: clamp(450px, 40.15vw, 1025px);
    // height: 71.4vh;

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      //meta width 523px

      .concept {
        .title {
          align-self: flex-start;
          color: white;
          display: inline-block;
          width: 25.7vw;
          font-family: Josefin Sans;
          font-style: normal;
          font-weight: normal;
          font-size: clamp(18px, 1.66vw, 32px);
          line-height: 3.78rem;
          letter-spacing: 0.05em;
        }

        .subtitle {
          color: white;
          font-family: Josefin Sans;
          font-weight: normal;
          font-size: clamp(13px, 0.93vw, 25px);
          line-height: 1.4vw;
          margin-top: 0.28vw;
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
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(13px, 0.83vw, 22px);
      }
    }

    .col-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 37vw;
    }
  }

  @media screen and (max-width: 1280px) {
    .wrapper-section {
      width: 100vw;
      height: 800px;

      .col-1 {
        justify-content: center !important;
        width: 100%;

        .concept {
          margin-bottom: 50px;
          text-align: center;

          .title {
            width: 100% !important;
            font-size: clamp(23px, 4.7vw, 32px) !important;
          }

          .subtitle {
            text-align: center;
            font-size: 16px !important;
            margin-top: 7px !important;
          }
        }

        .wrapper-info {
          margin-top: 60px;
          font-size: 16px !important;
        }
      }
    }
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<Card
  backgroundColor={'#0B5771'}
  borderRadius={windowsWidth > maxWidthTablet ? '20px' : '0px 0px 10px 10px'}
  boxShadow={windowsWidth < maxWidthTablet ? 'none' : '9px 12px 31px rgba(0, 0, 0, 0.5)'}
>
  <div class="wrapper-section">
    <div class="col-1">
      <div class="concept">
        <div class="title">{contactData.title}</div>
        {#if windowsWidth > 700}
          <div class="subtitle">{contactData.subtitle}</div>
        {/if}
      </div>
      {#if windowsWidth > maxWidthTablet}
        <img src="./images/contact.svg" alt="" class="main-image fade-in-bck" />
      {/if}

      <!-- FORM COMPONENT -->

      {#if windowsWidth <= maxWidthTablet}
        <Form />
      {/if}

      {#if windowsWidth > 700}
        <div class="wrapper-info">
          <div class="email">{contactData.email}</div>
          <div class="location-text">{contactData.location}</div>
        </div>
      {/if}
    </div>

    {#if windowsWidth > maxWidthTablet}
      <div class="col-2">
        <Form />
      </div>
    {/if}
  </div>
</Card>
