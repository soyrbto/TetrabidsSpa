<script>
  import Card from "../Component/SharedComponents/Card.svelte";
  import { contactData } from "../StaticStore";
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 65px 57px 85px;

    .title {
      margin-bottom: 20px;
      align-self: flex-start;
      color: white;
      display: inline-block;
      width: 493px;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.05em;
    }

    .subtitle {
      color: white;
      font-family: Josefin Sans;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 39px;
    }

    .main-image {
      margin-bottom: 50px;
    }

    .email {
      margin-bottom: 17px;
      color: white;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
    }

    .location {
      display: flex;
    }

    .location-text {
      display: inline;
      color: white;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      align-items: center;
    }

    .location img {
      display: inline;
      margin-right: 10px;
    }
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  [class$="-field"] {
    margin-bottom: 100px;
  }
  // acordarme de mejorar la seleccion de fields

  .column-wrapper {
    padding: 30px 46px 59px 46px;
  }

  .name-field {
    width: 616px;
    height: 63px;
    background-color: #f3f3f3;
    border-radius: 5px;
    // margin-bottom: 37px;
  }

  .email-field {
    width: 616px;
    height: 63px;
    background-color: #f3f3f3;
    // margin-bottom: 37px;
  }

  .message-field {
    width: 616px;
    height: 300px;
    background-color: #f3f3f3;
    // margin-bottom: 37px;
  }
</style>

<Card backgroundColor={'#0B5771'}>
  <div class="wrapper-section">
    <div class="col-1">
      <div class="title">{contactData.title}</div>
      <div class="subtitle">{contactData.subtitle}</div>
      <img src="./images/contact.svg" alt="" class="main-image" />
      <div class="email">{contactData.email}</div>
      <div class="location">
        <img src="./images/location.svg" alt="" />
        <div class="location-text">{contactData.location}</div>
      </div>
    </div>

    <div class="col-2">
      <Card>
        <div class="column-wrapper">
          <div class="name-field">Nombre</div>
          <div class="email-field">Email</div>
          <div class="message-field">Message</div>
        </div>
      </Card>
    </div>
  </div>
</Card>
