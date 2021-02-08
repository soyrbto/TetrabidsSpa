<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    padding: 0 5.2vw 0 1.56vw;
    background: rgba(0, 0, 0, 1);
    color: #666666;
    font-family: var(--display-typo);
    /* META font size 24px*/
    font-size: clamp(15px, 1.25vw, 32px);
  }

  span {
    font-weight: 700;
  }

  ul {
    display: flex;
    justify-content: space-between;
    height: 3.26vh;
    width: 100%;
    margin: 0;
  }

  li {
    list-style: none;
  }

  img {
    /** META 35px */
    height: 1.82vw;
  }

  .icons {
    display: flex;
    align-items: center;
    /* META 141px */
    width: clamp(10.5rem, 7.34vw, 18.5rem);
  }

  .underFooter {
    position: absolute;
    bottom: 0px;
    /* height: 15.75vh; */
    height: 200px;
    width: 100%;
    z-index: -1;
    background-color: black;
  }

  @media screen and (max-width: 1280px) {
    footer {
      flex-direction: column-reverse;
      justify-content: center;
      /* height: 9vh; */
      height: 72px;
      padding: 0;
      font-size: clamp(12px, 1.3vw, 15px);
    }

    ul {
      height: 30px;
    }

    .icons {
      width: max(15%, 125px);
    }

    img {
      height: clamp(18px, 5vw, 25px);
    }
  }
</style>

<div class="underFooter" />

<footer>
  <div class="content">Designed and powered <span> by Tetrabids</span></div>
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
