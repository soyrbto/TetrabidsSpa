<script>
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";
</script>

<style type="text/scss">
  .column-wrapper {
    font-family: josefin Sans;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    position: relative;

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 96%;

      .button-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(4vw + 8rem);
        height: 5.37vh;
        //font-size: calc(0.65vw + 1.25rem);
      }
    }
  }

  .group {
    position: relative;
    //META font zise 18px
    font-size: 1.6vh;
    line-height: 50%;
    color: #838383;
    margin-bottom: 3.42vh;
  }

  .group textarea {
    height: 21.8vh;
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
    top: 2.31vh;
  }

  .fields {
    width: 32vw;
    height: calc(1.2vw + 2rem);
    background-color: #f3f3f3;
    font-size: 16px;
    line-height: 150%;
    padding: 0px 0 0 20px;
    border-radius: 5px;
  }

  @media screen and (max-width: 1280px) {
    .fields {
      width: 60vw;
    }
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -0.5vh;
    background: white;
  }
</style>

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
