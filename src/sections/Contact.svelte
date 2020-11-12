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
    height: calc(14vw + 40rem);
  }

  @media screen and (max-width: 1280px) {
    .col-1 {
      width: 100%;
    }

    .wrapper-section {
      width: 100vw;
      height: auto;
    }

    .wrapper-info {
      margin-top: 30px;
    }

    div.title {
      width: 100% !important;
    }

    .concept {
      margin-bottom: 25px;
      align-self: center;

      .subtitle {
        text-align: center;
      }
    }
  }

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
        font-size: clamp(18px, 1vw, 32px);
        line-height: 3.78rem;
        letter-spacing: 0.05em;
      }

      .subtitle {
        color: white;
        font-family: Josefin Sans;
        font-weight: normal;
        font-size: clamp(11px, 0.8vw, 25px);
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
      height: 12%;
    }

    @media screen and (max-width: 700px) {
      .wrapper-info {
        visibility: hidden;
      }
    }

    .email {
      color: white;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: 600;
      font-size: clamp(14vw, 0.9vw, 18);
      margin-top: 0.56vw;
    }

    .location {
      display: flex;

      .location-text {
        display: inline;
        color: white;
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: 600;
        align-items: center;
        font-size: clamp(14vw, 0.9vw, 18);
      }
      img {
        display: inline-block;
        margin-right: 10px;
        height: 1.56vw !important;
      }
    }
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 37vw;
  }
</style>

<svelte:window bind:innerWidth={windowsWidth} />

<Card
  backgroundColor={'#0B5771'}
  borderRadius={windowsWidth > maxWidthTablet ? '20px' : '0px'}
>
  <div class="wrapper-section">
    <div class="col-1">
      <div class="concept">
        <div class="title">{contactData.title}</div>

        <div class="subtitle">{contactData.subtitle}</div>
      </div>
      {#if windowsWidth > maxWidthTablet}
        <img src="./images/contact.svg" alt="" class="main-image fade-in-bck" />
      {/if}

      <!-- FORM COMPONENT -->

      {#if windowsWidth <= maxWidthTablet}
        <Form />
      {/if}

      <div class="wrapper-info">
        <div class="email">{contactData.email}</div>
        <div class="location">
          <img src="./images/location.svg" alt="location pinpoint" />
          <div class="location-text">{contactData.location}</div>
        </div>
      </div>
    </div>

    {#if windowsWidth > maxWidthTablet}
      <div class="col-2">
        <Form />
      </div>
    {/if}
  </div>
</Card>
