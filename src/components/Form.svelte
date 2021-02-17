<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
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
            &::-webkit-scrollbar {
              width: clamp(6px, 0.52vw, 12px); // 10px
              background-color: #ebe8e8;
            }

            &::-webkit-scrollbar-thumb {
              border-radius: 6px;
              background-color: #c0bebe;

              &:hover {
                background-color: #a5a5a8;
              }
            }
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
          <div class="button-content">Enviar</div>
        </Button>
      </div>
    </form>
  </div>
</Card>
