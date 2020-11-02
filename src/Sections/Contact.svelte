<script>
  import Card from "../Component/SharedComponents/Card.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import { contactData } from "../StaticStore";
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    padding-right: 90px;
    width: 1511px;
  }

  .col-1 {
    justify-self: flex-end;
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

  .column-wrapper {
    font-family: josefin Sans;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 709px;
    padding: 30px 46px 59px 46px;
  }

  .group {
    position: relative;
    font-size: 18px;
    line-height: 50%;
    color: #838383;
    margin-bottom: 37px;
  }

  .fields {
    width: 616px;
    height: 63px;
    background-color: #f3f3f3;
    font-size: 16px;
    line-height: 150%;
    padding: 0px 0 0 20px;
    border-radius: 5px;
  }

  .group textarea {
    height: 300px;
    border-style: none;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 0.4em;
    padding-right: 0.4em;
  }

  .group > label {
    position: absolute;
    top: 27px;
    left: 15px;
    transition: all 0.35s;
    user-select: none;
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -6px;
    background: white;
  }

  .button-wrapper {
    width: 153px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
  }

  .button-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
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
          <form action="">
            <div class="group">
              <input required name="hidden" class="fields" id="name" />
              <label for="name">nombre</label>
            </div>
            <div class="group">
              <input required class="fields" id="email" />
              <label for="email">email</label>
            </div>
            <div class="group">
              <textarea required class="fields" id="message" />
              <label for="message">mensaje</label>
            </div>
            <div class="button-wrapper">
              <Button>
                <div class="button-content">Enviar</div>
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  </div>
</Card>
