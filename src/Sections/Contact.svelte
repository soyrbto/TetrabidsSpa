<script>
  import Card from "../Component/SharedComponents/Card.svelte";
  import Button from "../Component/SharedComponents/button.svelte";
  import { contactData } from "../StaticStore";
</script>

<style type="text/scss">
  .wrapper-section {
    display: flex;
    justify-content: space-between;
    width: 78.65vw;
    padding: 2.5vw 3.6vw 3vw 3.6vw;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 26.25vw;

    .concept {
      .title {
        align-self: flex-start;
        color: white;
        display: inline-block;
        width: 25.7vw;
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
      height: 20%;
    }

    .email {
      color: white;
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
    }

    .location {
      display: flex;

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
      img {
        display: inline;
        margin-right: 10px;
      }
    }
  }

  .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 37vw;

    .column-wrapper {
      font-family: josefin Sans;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 1.6vw 2.4vw 0 2.4vw;
      position: relative;

      .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .button-wrapper {
        width: 153px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        position: absolute;
        top: 96%;

        .button-content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 58px;
          font-size: calc(0.65vw + 1.25rem);
        }
      }
    }
  }

  .group {
    position: relative;
    font-size: 18px;
    line-height: 50%;
    color: #838383;
    margin-bottom: 37px;
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
    top: 40%;
    left: 15px;
    transition: all 0.35s;
    user-select: none;
  }

  .group textarea + label {
    top: 6%;
  }

  .fields {
    width: 32vw;
    height: 3.3vw;
    background-color: #f3f3f3;
    font-size: 16px;
    line-height: 150%;
    padding: 0px 0 0 20px;
    border-radius: 5px;
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -6px;
    background: white;
  }
</style>

<Card backgroundColor={'#0B5771'}>
  <div class="wrapper-section">
    <div class="col-1">
      <div class="concept">
        <div class="title">{contactData.title}</div>
        <div class="subtitle">{contactData.subtitle}</div>
      </div>
      <img src="./images/contact.svg" alt="" class="main-image" />
      <div class="wrapper-info">
        <div class="email">{contactData.email}</div>
        <div class="location">
          <img src="./images/location.svg" alt="" />
          <div class="location-text">{contactData.location}</div>
        </div>
      </div>
    </div>

    <div class="col-2">
      <Card>
        <div class="column-wrapper">
          <form action="" autocomplete="off" class="form-wrapper">
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
