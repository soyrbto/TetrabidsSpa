<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import { messageState } from "../Stores";

  let contactForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(contactForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  function changeStateMessage() {
    messageState.update((value) => (value = !value));
  }
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .column-wrapper {
    padding: clamp(30px, 2.08vw, 45px) clamp(20px, 2.08vw, 35px);

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .group {
        font-size: clamp(13px, 0.95vw, 22px); // 18px
        line-height: 50%;
        color: #838383;
        width: 100%;
        margin-bottom: clamp(20px, 1.98vw, 50px);
        position: relative;

        @include respond(phone) {
          font-size: 16px;
          margin-bottom: 35px;
        }

        .fields {
          font-family: $font-secundary;
          font-size: clamp(16px, 1.1vw, 26px); // 21px
          letter-spacing: 0.03em;
          line-height: 150%;
          background-color: #f3f3f3;
          width: 100%;
          height: clamp(45px, 3.22vw, 75px); // 62px
          padding: 0 20px;
          border-radius: 5px;

          @include respond(tab-land) {
            width: clamp(0px, 80vw, 750px);
          }
        }

        input:focus ~ label,
        input:valid ~ label,
        textarea:focus ~ label,
        textarea:valid ~ label {
          top: -0.95vw;
          background: white;

          @include respond(phone) {
            top: -4vw;
          }
        }

        & textarea.fields {
          height: 16vw;
          border-style: none;
          padding: 20px;
          text-align: justify;

          @include respond(tab-land) {
            height: 260px;
          }

          @include respond(tab-landMin) {
            @include scrollBar;
          }
        }

        & > label {
          position: absolute;
          top: 45%;
          left: 15px;
          transition: all 0.35s;
          user-select: none;
        }

        & textarea + label {
          top: clamp(20px, 1.4vw, 30px);

          @include respond(phone) {
            top: 27px;
          }
        }
      }
    }

    .button-wrapper {
      display: flex;
      position: absolute;
      top: 96%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      .button-content {
        padding: clamp(10px, 0.7vw, 20px) clamp(23px, 1.8vw, 40px);
      }
    }
  }
</style>

<Card>
  <div class="column-wrapper">
    <form
      bind:this={contactForm}
      on:submit={handleSubmit}
      class="form-wrapper"
      name="contact"
      netlify
    >
      <div class="group">
        <input required type="text" class="fields" name="name" id="name" />
        <label for="name">Nombre</label>
      </div>
      <div class="group">
        <input required type="email" name="email" class="fields" id="email" />
        <label for="email">Correo electrónico</label>
      </div>
      <div class="group">
        <textarea
          required
          type="text"
          style="resize:none"
          class="fields"
          name="message"
          id="message"
        />
        <label for="message">Mensaje</label>
      </div>
      <input name="form-name" type="hidden" value="contact" />
      <div class="button-wrapper">
        <Button>
          <div on:click={changeStateMessage} class="button-content">Enviar</div>
        </Button>
      </div>
    </form>
  </div>
</Card>
