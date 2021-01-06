<script>
  import Card from "../shared/Card.svelte";
  import Button from "./Button.svelte";

  let contactForm;
  let nameField, emailField, messageField;

  // const handleSubmit = () => {
  //   let myForm = contactForm;
  //   let formData = new FormData(myForm);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch((error) => alert(error));

  //   nameField.value = "";
  //   emailField.value = "";
  //   messageField.value = "";
  // };
</script>

<style type="text/scss">
  .column-wrapper {
    font-family: josefin Sans;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: clamp(30px, 2.08vw, 45px) calc(0.6vw + 1.2rem);
    position: relative;

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .group {
        position: relative;
        //META font size 18px
        font-size: clamp(12px, 0.95vw, 22px);
        line-height: 50%;
        color: #838383;
        // margin-bottom: calc(0.5vw + 1rem);
        margin-bottom: 1.98vw;

        & .fields {
          width: 32vw;
          height: clamp(40px, 3.22vw, 75px);
          background-color: #f3f3f3;
          line-height: 150%;
          padding: 0px 0 0 20px;
          border-radius: 5px;
        }

        input:focus ~ label,
        input:valid ~ label,
        textarea:focus ~ label,
        textarea:valid ~ label {
          // top: calc(-0.3vw - 0.5rem);
          top: -0.95vw;
          background: white;
        }

        & textarea.fields {
          height: 16vw;
          border-style: none;
          padding: 15px 0.4em 0.4em 15px;
        }

        & > label {
          position: absolute;
          top: 40%;
          left: 15px;
          transition: all 0.35s;
          user-select: none;
        }

        & textarea + label {
          // top: 2.31vh;
          top: 5%;
        }
      }
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
        padding: clamp(10px, 0.7vw, 20px) clamp(23px, 1.8vw, 40px);
        font-size: clamp(15px, 1.3vw, 29px);
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .group {
      margin-bottom: 20px !important;

      & textarea {
        height: calc(3.125vw + 20rem) !important;
      }
    }

    .fields {
      width: 80vw !important;
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
