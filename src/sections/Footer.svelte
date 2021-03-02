<style type="text/scss">
  @import "../stylesGlobal/vars";

  .underFooter {
    position: absolute;
    bottom: 0px;
    height: 200px;
    width: 100%;
    z-index: -1;
    background-color: black;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-primary;
    height: $height-footer;
    padding: 0 5.2vw 0 1.56vw;
    background: rgba(0, 0, 0, 1);
    color: #666666;
    font-size: clamp(17px, 1.25vw, 32px); // 24px

    @include respond(tab-port) {
      flex-direction: column-reverse;
      height: $height-footer-mob;
      padding: 15px 0 7px 0;
      font-size: clamp(16px, 0.98vw, 19px);
    }

    span {
      font-weight: 700;
    }

    .icons {
      display: flex;
      align-items: center;
      width: clamp(110px, 7.34vw, 185px); // 141px

      @include respond(tab-port) {
        width: 140px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        width: 100%;

        li {
          height: $height-icons; // 35px
          list-style: none;

          img {
            height: $height-icons; // 35px

            @include respond(tab-port) {
              height: 28px;
            }
          }
        }
      }
    }
  }
</style>

<div class="underFooter" />

<footer>
  <div class="content">
    Designed and powered <span> by Tetrabids</span> | 2021
  </div>
  <div class="icons">
    <ul>
      <li>
        <a
          href="https://www.facebook.com/tetrabids"
          target="_blank"
          rel="noopener"
        >
          <img src="../images/facebook.svg" alt="facebook icon" /></a
        >
      </li>
      <li>
        <a
          href="https://www.instagram.com/tetrabids/"
          target="_blank"
          rel="noopener"
        >
          <img src="../images/instagram.svg" alt="instagram icon" /></a
        >
      </li>
      <li>
        <a href="https://wa.me/584125457790" target="_blank" rel="noopener">
          <img src="../images/whatsapp.svg" alt="instagram icon" /></a
        >
      </li>
    </ul>
  </div>
</footer>
