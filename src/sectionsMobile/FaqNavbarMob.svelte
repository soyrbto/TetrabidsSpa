<script>
  import { faq } from "../FaqStore";
</script>

<style type="text/scss">
  @import "../stylesGlobal/vars";

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 5%;
    pointer-events: none;
    z-index: -1;

    &.open {
      touch-action: none;
      background-color: rgba(0, 0, 0, 0.98);
      pointer-events: visible;
      transition: all 200ms ease-in-out;
      z-index: 5;
    }
  }

  .nav__list {
    display: none;
    list-style: none;

    &.show {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
    }

    .nav__item {
      background-color: transparent;
      opacity: 0;
      animation-name: fadein;
      animation-duration: 1s;
      animation-fill-mode: forwards;

      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.25s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        animation-delay: 0.35s;
      }
      &:nth-child(5) {
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        animation-delay: 0.45s;
      }
      &:nth-child(7) {
        animation-delay: 0.5s;
      }
      &:nth-child(8) {
        animation-delay: 0.55s;
      }

      .nav__link {
        font-size: clamp(16px, 4.58vw, 24px);
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: 0.1em;
        text-decoration: none;
        color: white;
      }
    }
  }
</style>

<nav on:wheel|preventDefault class="nav">
  <ul class="show nav__list js-nav__list">
    {#each faq as item}
      <li class="nav__item">
        <div class="nav__link">{item.title}</div>
      </li>
    {/each}
  </ul>
</nav>
