<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";

  let contactForm;
  let nameField, emailField, messageField;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .column-wrapper {
    padding: clamp(30px, 2.08vw, 45px) clamp(20px, 2.08vw, 35px);
    position: relative;

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .group {
        font-family: $font-primary;
        font-size: clamp(12px, 0.95vw, 22px); // 18px
        line-height: 50%;
        color: #838383;
        width: 100%;
        margin-bottom: clamp(20px, 1.98vw, 50px);
        position: relative;

        .fields {
          font-family: $font-primary;
          font-size: clamp(16px, 1.14vw, 26px); // 22px
          letter-spacing: 0.03em;
          line-height: 120%;
          background-color: #f3f3f3;
          width: 100%;
          height: clamp(40px, 3.22vw, 75px);
          padding-left: 20px;
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
        }

        & textarea.fields {
          height: 16vw;
          border-style: none;
          padding: 20px 0.4em 0.4em 20px;
          font-weight: 600;

          @include respond(tab-land) {
            height: calc(3.125vw + 20rem);
          }
        }

        & > label {
          position: absolute;
          top: 40%;
          left: 15px;
          transition: all 0.35s;
          user-select: none;
        }

        & textarea + label {
          top: 5%;
        }
      }
    }

    .button-wrapper {
      display: flex;
      position: absolute;
      top: 96%;

      .button-content {
        padding: clamp(10px, 0.7vw, 20px) clamp(23px, 1.8vw, 40px);
      }
    }
  }
</style>

<Card>
  <div class="column-wrapper">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      autocomplete="off"
      class="form-wrapper"
      bind:this={contactForm}
    >
      <div class="group">
        <input
          required
          type="text"
          class="fields"
          name="name"
          bind:this={nameField}
          id="name"
        />
        <label for="name">nombre</label>
      </div>
      <div class="group">
        <input
          bind:this={emailField}
          required
          type="email"
          name="email"
          class="fields"
          id="email"
        />
        <label for="email">email</label>
      </div>
      <div class="group">
        <textarea
          required
          bind:this={messageField}
          type="text"
          style="resize:none"
          class="fields"
          name="message"
          id="message"
        />
        <label for="message">mensaje</label>
      </div>
      <input name="form-name" type="hidden" value="contact" />
      <div class="button-wrapper">
        <Button>
          <div class="button-content">Enviar</div>
        </Button>
      </div>
    </form>
  </div>
</Card>
