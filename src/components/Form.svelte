<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import { writable } from "svelte/store";

  let user = writable({});

  let submitForm = (event) => {
    let formdata = new FormData();
    formdata.append("name", `${user.name}`); //notice we cast the store values as strings with the `${var}` syntax
    formdata.append("email", `${user.email}`);
    formdata.append("message", `${user.message}`);
    fetch("/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formdata,
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    event.preventDefault();
  };
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

          @include respond(phone) {
            height: 55px;
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
            height: 260px;
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
    >
      <div class="group">
        <input
          required
          type="text"
          class="fields"
          name="name"
          id="name"
          bind:value={$user.name}
        />
        <label for="name">Nombre</label>
      </div>
      <div class="group">
        <input
          required
          type="email"
          name="email"
          class="fields"
          id="email"
          bind:value={$user.email}
        />
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
          bind:value={$user.message}
        />
        <label for="message">Mensaje</label>
      </div>
      <input name="form-name" type="hidden" value="contact" />
      <div class="button-wrapper" on:click|preventDefault={submitForm}>
        <Button>
          <div class="button-content">Enviar</div>
        </Button>
      </div>
    </form>
  </div>
</Card>
