<script>
  export let urlInstagram;
  export let urlTelegram;
  export let urlFacebook;
  export let urlWhatsapp;
  export let urlEmail;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .wrapper-icons {
    @include respond(tab-port) {
      width: 50vw;
      margin: auto;
    }

    @include respond(phone) {
      width: 100%;
    }

    .social-network {
      width: clamp(160px, 14.32vw, 365px); //275px

      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        & > li > a > img {
          height: $height-icons;
          cursor: pointer;

          &:hover {
            filter: invert(35%) sepia(4%) saturate(215%) hue-rotate(338deg)
              brightness(101%) contrast(90%);
          }
        }
      }
    }
  }
</style>

<div class="wrapper-icons">
  <div class="social-network">
    <ul>
      <li>
        <a target="_blank" href={urlInstagram}
          ><img
            src="/images/instagram-icon.svg"
            alt="instagram-icon"
            rel="noopener noreferrer"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href={urlTelegram}
          ><img
            src="/images/telegram-icon.svg"
            alt="telegram-icon"
            rel="noopener noreferrer"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href={urlFacebook}
          ><img
            src="/images/facebook-icon.svg"
            alt="facebook-icon"
            rel="noopener noreferrer"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href={urlWhatsapp}
          ><img
            src="/images/whatsapp-icon.svg"
            alt="whatsapp-icon"
            rel="noopener noreferrer"
          />
        </a>
      </li>
      <li>
        <a target="_blank" href={urlEmail}
          ><img
            src="/images/email-icon.svg"
            alt="email-icon"
            rel="noopener noreferrer"
          />
        </a>
      </li>
    </ul>
  </div>
</div>
