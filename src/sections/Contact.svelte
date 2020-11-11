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
    height: 71.4vh;
  }

  @media screen and (max-width: 1280px) {
    .col-1 {
      flex-grow: 1;
    }

    .wrapper-info {
      margin-top: 30px;
    }

    div.title {
      width: 100% !important;
    }

    .concept {
      margin-bottom: 25px;
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
        font-size: clamp(18px, 1.5vw, 32px);
        line-height: 3.5vh;
        letter-spacing: 0.05em;
      }

      .subtitle {
        color: white;
        font-family: Josefin Sans;
        font-weight: normal;
        font-size: clamp(14px, 1.1vw, 25px);
        line-height: 2.5vh;
        margin-top: 0.5vh;
      }
    }

    .main-image {
      width: 26vw;
    }

    .wrapper-info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 20%;
    }

    .email {
      color: white;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 1.5vh;
      margin-top: 1vh;
    }

    .location {
      display: flex;

      .location-text {
        display: inline;
        color: white;
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5vh;
        align-items: center;
      }
      img {
        display: inline-block;
        margin-right: 10px;
        height: 2.77vh !important;
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

<Card backgroundColor={'#0B5771'}>
  <div class="wrapper-section">
    <div class="col-1">
      <div class="concept">
        <div class="title">{contactData.title}</div>
        {#if windowsWidth >= 500}
          <div class="subtitle">{contactData.subtitle}</div>
        {/if}
      </div>
      {#if windowsWidth >= maxWidthTablet}
        <img src="./images/contact.svg" alt="" class="main-image fade-in-bck" />
      {/if}

      <!-- FORM COMPONENT -->

      {#if windowsWidth < maxWidthTablet}
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

    {#if windowsWidth >= maxWidthTablet}
      <div class="col-2">
        <Form />
      </div>
    {/if}
  </div>
</Card>
