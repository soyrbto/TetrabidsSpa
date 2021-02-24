<script>
  import { socialNetwork } from "../StaticStore";

  let icon;
  let url;
  let dataAction;
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .wrapper-icons {
    display: flex;
    justify-content: space-between;

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

    .share {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: clamp(130px, 9.68vw, 235px); //186px
      & > img {
        height: $height-icons;
      }

      .share-text {
        font-size: $font-size-subtitle-desk;
        color: #bcbcbc;
      }
    }
  }
</style>

<div class="wrapper-icons">
  <div class="social-network">
    <ul>
      {#each socialNetwork as item}
        <li>
          <a target="_blank" href={item.url}
            ><img
              src="/images/{item.icon}-icon.svg"
              alt="{item.icon}-icon"
              rel="noopener noreferrer"
            />
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="share">
    <img src="/images/share-icon.svg" alt="share-icon" />
    <p class="share-text">20 compartidos</p>
  </div>
</div>
