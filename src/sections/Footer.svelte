<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    padding: 0 5.2vw 0 1.56vw;
    background: rgba(0, 0, 0, 0);
    color: #666666;
    font-family: var(--display-typo);
    /* META font size 24px*/
    font-size: 2.22vh;
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
    height: 3.26vh;
  }

  .icons {
    display: flex;
    align-items: center;
    /* META 141px */
    width: clamp(10.5rem, 7.34vw, 18.5rem);
    height: 100%;
  }

  .underFooter {
    position: absolute;
    bottom: 0px;
    height: 15.75vh;
    width: 100%;
    z-index: -1;
    background-color: black;
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
          <img src="./images/facebook.svg" alt="facebook icon" /></a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/tetrabids/"
          target="_blank"
          rel="noopener"
        >
          <img src="./images/instagram.svg" alt="instagram icon" /></a>
      </li>
      <li>
        <a href="https://wa.me/584125457790" target="_blank" rel="noopener">
          <img src="./images/whatsapp.svg" alt="instagram icon" /></a>
      </li>
    </ul>
  </div>
</footer>
