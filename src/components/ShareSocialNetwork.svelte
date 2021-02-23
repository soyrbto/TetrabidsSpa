<script>
  import { socialNetwork } from "../StaticStore";
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

        & > li > img {
          height: $height-icons;
          cursor: pointer;
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

      & > img:hover {
        cursor: pointer;
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
        <li><img src="/images/{item}-icon.svg" alt="{item}-icon" /></li>
      {/each}
    </ul>
  </div>
  <div class="share">
    <img src="/images/share-icon.svg" alt="share-icon" />
    <p class="share-text">20 compartidos</p>
  </div>
</div>
